'use server';

import { sql } from '@/lib/db';
import { z } from 'zod';

const EmailSchema = z.object({
  email: z.string().email('Invalid email address'),
});

/**
 * The standard response object returned by Server Actions.
 * Provides a structured way to communicate success or failure to the client.
 */
export type ActionState = {
  /** 
   * A human-readable error message explaining why the action failed.
   * Typically displayed in an error toast or below form fields.
   */
  error?: string;
  /** 
   * A flag indicating if the operation was completed successfully.
   */
  success?: boolean;
  /** 
   * A human-readable success message.
   * Typically displayed in a success toast or confirmation banner.
   */
  message?: string;
} | null;

/**
 * A Server Action that handles newsletter registration requests.
 * It validates the user's email address using Zod and interacts with the 
 * PostgreSQL database to store the subscriber.
 * 
 * @param prevState - The state of the form before this action was invoked.
 * @param formData - The submitted form data containing the 'email' field.
 * @returns A promise resolving to an `ActionState` object with the result of the operation.
 */
export async function subscribeEmail(prevState: ActionState, formData: FormData) {
  const email = formData.get('email');

  // Validate the email format
  const result = EmailSchema.safeParse({ email });

  if (!result.success) {
    return { error: result.error.issues[0].message };
  }

  const { email: validatedEmail } = result.data;

  try {
    // Check if the email already exists
    const existing = await sql`
      SELECT id FROM subscribers WHERE email = ${validatedEmail} LIMIT 1;
    `;

    if (existing.rowCount && existing.rowCount > 0) {
      return { success: true, message: "You're already on the list! Glad to have you back." };
    }

    // Insert the new subscriber
    await sql`
      INSERT INTO subscribers (email) VALUES (${validatedEmail});
    `;

    return { success: true, message: 'Thanks for subscribing! Check your inbox for updates.' };
  } catch (err) {
    console.error('Subscription error:', err);
    return { error: 'Something went wrong. Please try again later.' };
  }
}

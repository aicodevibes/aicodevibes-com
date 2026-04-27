'use server';

import { sql } from '@/lib/db';
import { z } from 'zod';

const EmailSchema = z.object({
  email: z.string().email('Invalid email address'),
});

/**
 * The state returned by the subscribeEmail action
 */
export type ActionState = {
  /** Error message if the action failed */
  error?: string;
  /** Whether the action was successful */
  success?: boolean;
  /** Success message if the action succeeded */
  message?: string;
} | null;

/**
 * Server action to handle newsletter subscriptions.
 * Validates the email and saves it to the database.
 * 
 * @param prevState - The previous state of the action
 * @param formData - The form data containing the email address
 * @returns An object containing the success status and message or error
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

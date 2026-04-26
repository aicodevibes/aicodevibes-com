'use server';

import { sql } from '@/lib/db';
import { z } from 'zod';

const EmailSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export async function subscribeEmail(prevState: any, formData: FormData) {
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

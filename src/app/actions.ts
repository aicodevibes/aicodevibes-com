'use server';

import { sql } from '@vercel/postgres';
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
    // 1. Create the table if it doesn't exist (Simple "No-Config" setup)
    await sql`
      CREATE TABLE IF NOT EXISTS subscribers (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // 2. Check if the email already exists
    const existing = await sql`
      SELECT * FROM subscribers WHERE email = ${validatedEmail};
    `;

    if (existing.rowCount && existing.rowCount > 0) {
      return { success: true, message: "You're already on the list! Glad to have you back." };
    }

    // 3. Insert the new subscriber
    await sql`
      INSERT INTO subscribers (email) VALUES (${validatedEmail});
    `;

    return { success: true, message: 'Thanks for subscribing! Check your inbox for updates.' };
  } catch (err) {
    console.error('Subscription error:', err);
    return { error: 'Something went wrong. Please try again later.' };
  }
}

import { sql } from '@vercel/postgres';

/**
 * Initializes the database schema if required tables do not already exist.
 * This is designed to be called during the application's initialization phase
 * (e.g., in a root layout or startup script) to ensure the environment is ready.
 * 
 * @returns A promise that resolves to an object containing a success flag and an optional error.
 */
export async function initDb() {
  // If we're in a local build environment without a DB, skip initialization
  if (!process.env.POSTGRES_URL && !process.env.DATABASE_URL) {
    console.warn('Postgres connection string not found. Skipping database initialization.');
    return { success: false, error: 'No connection string' };
  }

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS subscribers (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
    return { success: true };
  } catch (error) {
    console.error('Database initialization failed:', error);
    return { success: false, error };
  }
}

export { sql };

import { sql } from '@vercel/postgres';

/**
 * Initializes the database tables if they don't exist.
 * This can be called in the layout or a dedicated initialization route.
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

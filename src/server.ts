import { Request, Response } from 'express';
import { Pool } from 'pg'; // Import the Postgres client
import app from './app';

const PORT = process.env.PORT || 3000;

// Configure the connection to the database
// NOTICE: 'host' is 'db' (the name of the service in docker-compose.yml)
const pool = new Pool({
  user: process.env.POSTGRES_USER || 'admin',
  host: process.env.DB_HOST || 'db', // The Magic: Using the service name!
  database: process.env.POSTGRES_DB || 'myapp',
  password: process.env.POSTGRES_PASSWORD || 'secret',
  port: 5432,
});

// Health check endpoint to verify DB connection
app.get('/api/health', async (_req: Request, res: Response) => {
  try {
    // Ask the DB for the current time to prove connection works
    const result = await pool.query('SELECT NOW()');
    res.json({ 
      status: 'success', 
      message: 'Database Connected!', 
      time: result.rows[0].now 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Database Connection Failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
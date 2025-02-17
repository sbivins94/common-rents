import pool from './db';

const testConnection = async () => {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Connected to the database:', res.rows[0]);
  } catch (err) {
    console.error('Database connection error:', err);
  } finally {
    pool.end();
  }
};

testConnection();

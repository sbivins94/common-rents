import { Pool } from 'pg';

const pool = new Pool({
  user: 'sean',
  host: 'localhost',
  database: 'common_rents',
  password: '240W98th$t',
  port: 5432,
});

export default pool;

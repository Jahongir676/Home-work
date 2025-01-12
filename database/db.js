import pg from 'pg';
const Pool = pg.Pool;
const pool = new Pool({
    user: 'your_user',
    host: 'localhost',
    database: 'Shop',
    password: 'your_password',
    port: 5432
});

export default pool;
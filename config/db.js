import pg from 'pg';
const { Pool } = pg;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'postgres',
    database: 'nodejs_trello_service',
    port: '5432'
});

export default pool;
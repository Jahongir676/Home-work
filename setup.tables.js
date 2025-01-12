import pg from 'pg';

const pool = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'nodejs_trello_service',
  password: 'postgres',
  port: 5432,
});

const createTables = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS Users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
      );
      
      CREATE TABLE IF NOT EXISTS Boards (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        columns JSONB DEFAULT '[]'
      );

      CREATE TABLE IF NOT EXISTS Tasks (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        "order" INT NOT NULL,
        description TEXT,
        userId INT REFERENCES Users(id) ON DELETE SET NULL,
        boardId INT REFERENCES Boards(id) ON DELETE CASCADE,
        columnId INT
      );
    `);

    console.log('Tables created successfully.');
  } catch (err) {
    console.error('Error creating tables:', err.message);
  } finally {
    await pool.end();
  }
};

export default createTables();

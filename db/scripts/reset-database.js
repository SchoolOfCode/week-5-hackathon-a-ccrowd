import { pool } from "../index.js";

async function resetDatabase() {
  try {
    // Drop existing tables if they exist
    await pool.query(`
      DROP TABLE IF EXISTS films CASCADE;
      DROP TABLE IF EXISTS directors CASCADE;
    `);

    // Create the directors table
    await pool.query(`
      CREATE TABLE directors (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL
      );
    `);

    // Create the films table with a foreign key to the directors table
    await pool.query(`
      CREATE TABLE films (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        year INT,
        director_id INT REFERENCES directors(id)
      );
    `);

    // Seed the directors table
    await pool.query(`
      INSERT INTO directors (first_name, last_name)
      VALUES 
        ('Christopher', 'Nolan'),
        ('Steven', 'Speilberg'),
        ('Quentin', 'Tarantino'),
        ('Richard', 'Curtis'),
        ('James', 'Cameron'),
        ('Greta', 'Gerwig');
    `);

    // Seed the films table
    await pool.query(`
      INSERT INTO films (title, year, director_id)
      VALUES 
        ('Interstellar', '2014', 1),
        ('Inception', '2010', 1),
        ('Jurassic Park', '1993', 2),
        ('E.T.', '1982', 2),
        ('BFG', '2016', 2),
        ('Pulp Fiction', '1994', 3),
        ('Jackie Brown', '1997', 3),
        ('Love Actually', '2003', 4),
        ('Avatar', '2009', 5),
        ('Barbie', '2023', 6),
        ('Ladybird', '2017', 6),
        ('Little Women', '2019', 6);
    `);

    console.log("Database reset successful");
  } catch (error) {
    console.error("Database reset failed: ", error);
  } finally {
    // End the pool
    await pool.end();
  }
}

await resetDatabase();

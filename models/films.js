import { pool } from "../db/index.js";

export async function fetchAllFilms() {
  const result = await pool.query("SELECT * FROM films");
  return result.rows;
}

export async function fetchFilmById(id) {
  const result = await pool.query(`SELECT * FROM films WHERE id = $1`, [id]);
  return result.rows;
}

export async function insertFilm(title, director_id, year) {
  const result = await pool.query(
    `INSERT INTO films(title, director_id, year) VALUES ($1, $2, $3) RETURNING *`,
    [title, director_id, year]
  );

  return result.rows;
}

export async function modifyFilmById(id, title, director_id, year) {
  const result = await pool.query(
    `UPDATE films SET title = $1, director_id = $2, year = $3 WHERE id = $4 RETURNING *`,
    [title, director_id, year, id]
  );

  return result.rows;
}

export async function removeFilmById(id) {
  const result = await pool.query(
    `DELETE FROM films WHERE id = $1 RETURNING *`,
    [id]
  );
  return result;
}

import { pool } from "../db/index.js";

export async function fetchAllFilms() {
  const result = await pool.query("SELECT * FROM films");
  return result.rows;
}

export async function fetchFilmById(id) {
  const result = await pool.query(`SELECT * FROM films WHERE id = $1`, [id]);
  return result.rows;
}

export async function insertFilm(title, director_id, year) {}

export async function modifyFilmById(id, title, director_id, year) {}

export async function removeFilmById(id) {}

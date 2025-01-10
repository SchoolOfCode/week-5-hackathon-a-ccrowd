import { pool } from "../db/index.js";

export async function fetchDirectorsandFilms() {
  const result = await pool.query(
    `SELECT * FROM directors
        FULL OUTER JOIN films
        ON directors.id = films.director_id`
  );
  return result.rows;
}

const result = await fetchDirectorsandFilms();

console.log(result);

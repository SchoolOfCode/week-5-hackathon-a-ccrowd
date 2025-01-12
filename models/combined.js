import { pool } from "../db/index.js";

export async function fetchDirectorsandFilms() {
  const result = await pool.query(
    `SELECT * FROM directors
        FULL OUTER JOIN films
        ON directors.id = films.director_id`
  );
  return result.rows;
}



//query parameters 
//takes first name and last name from req.query

export async function fetchDirectorByNameParams (firstName, lastName) {
  const result= await pool.query(
    `SELECT * FROM directors
    FULL OUTER JOIN films
    ON directors.id = films.director_id 
    WHERE first_name LIKE $1 AND last_name LIKE $2`, [firstName, lastName]
  );
  return result.rows;
}

const result2 = await fetchDirectorByNameParams("tarantino")
  console.log(result2)


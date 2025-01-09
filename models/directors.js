import { pool } from "../db/index.js";

export async function fetchAllDirectors() {

    try {
        const directors = await pool.query(`
        SELECT * FROM directors
        `);
        return directors.rows;
    } catch (error) {
        throw error;
    }
}
export async function fetchDirectorById(id) {

    try {
        const director = await pool.query(`
        SELECT * FROM directors
        WHERE id = $1
        `, [id]);
        return director.rows[0];
    } catch (error) {
        throw error;
    }
}
export async function insertDirector(first_name, last_name) {
    
    try {
        const director = await pool.query(`
        INSERT INTO directors (first_name, last_name)
        VALUES ($1, $2)
        RETURNING *
        `, [first_name, last_name]);
        return director.rows;
    } catch (error) {
        throw error;
    }
}
export async function modifyDirectorById(id, first_name, last_name) {
    
    try {
        const director = await pool.query(`
        UPDATE directors
        SET first_name = $1, last_name = $2
        WHERE id = $3
        RETURNING *
        `, [first_name, last_name, id]);
        return director.rows;
    } catch (error) {
        throw error;
    }
}
export async function removeDirectorById(id) {
    
    try {
        const director = await pool.query(`
        DELETE FROM directors
        WHERE id = $1
        RETURNING *
        `, [id]);
        return director;
    } catch (error) {
        throw error;
    }
}

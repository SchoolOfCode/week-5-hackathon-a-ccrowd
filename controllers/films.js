import {
  fetchAllFilms,
  fetchFilmById,
  insertFilm,
  modifyFilmById,
  removeFilmById,
} from "../models/films.js";

export async function getFilms(req, res) {
  try {
    const books = await fetchAllFilms();
    res.status(200).json({ status: "success", data: books });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

export async function getFilmById(req, res) {
  try {
    const id = req.params.id;
    const book = await fetchFilmById(id);
    if (!book) {
      return res
        .status(404)
        .json({ status: "fail", message: "Book not found" });
    }
    res.status(200).json({ status: "success", data: book });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

export async function createFilm(req, res) {
  try {
    const { title, author_id, published_date } = req.body;
    if (!title || !author_id || !published_date) {
      return res
        .status(400)
        .json({ status: "fail", message: "Missing required fields" });
    }
    const book = await insertFilm(title, author_id, published_date);
    res.status(201).json({ status: "success", data: book });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

export async function updateFilmById(req, res) {
  try {
    const id = req.params.id;
    const { title, author_id, published_date } = req.body;
    if (!title || !author_id || !published_date) {
      return res
        .status(400)
        .json({ status: "fail", message: "Missing required fields" });
    }
    const book = await modifyFilmById(id, title, author_id, published_date);
    if (!book) {
      return res
        .status(404)
        .json({ status: "fail", message: "Book not found" });
    }
    res.status(200).json({ status: "success", data: book });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

export async function deleteFilmById(req, res) {
  try {
    const id = req.params.id;
    const book = await removeFilmById(id);
    if (!book) {
      return res
        .status(404)
        .json({ status: "fail", message: "Book not found" });
    }
    res.status(204).send(); // 204 No Content
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

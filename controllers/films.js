import {
  fetchAllFilms,
  fetchFilmById,
  insertFilm,
  modifyFilmById,
  removeFilmById,
} from "../models/films.js";

export async function getFilms(req, res) {
  try {
    const films = await fetchAllFilms();
    res.status(200).json({ status: "success", data: films });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

export async function getFilmById(req, res) {
  try {
    const id = req.params.id;
    const film = await fetchFilmById(id);
    if (!film) {
      return res
        .status(404)
        .json({ status: "fail", message: "Film not found" });
    }
    res.status(200).json({ status: "success", data: film });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

export async function createFilm(req, res) {
  try {
    const { title, director_id, year } = req.body;
    if (!title || !author_id || !year) {
      return res
        .status(400)
        .json({ status: "fail", message: "Missing required fields" });
    }
    const film = await insertFilm(title, director_id, year);
    res.status(201).json({ status: "success", data: film });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

export async function updateFilmById(req, res) {
  try {
    const id = req.params.id;
    const { title, director_id, year } = req.body;
    if (!title || !author_id || !year) {
      return res
        .status(400)
        .json({ status: "fail", message: "Missing required fields" });
    }
    const film = await modifyFilmById(id, title, director_id, year);
    if (!film) {
      return res
        .status(404)
        .json({ status: "fail", message: "film not found" });
    }
    res.status(200).json({ status: "success", data: film });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

export async function deleteFilmById(req, res) {
  try {
    const id = req.params.id;
    const film = await removeFilmById(id);
    if (!film) {
      return res
        .status(404)
        .json({ status: "fail", message: "film not found" });
    }
    res.status(204).send(); // 204 No Content
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

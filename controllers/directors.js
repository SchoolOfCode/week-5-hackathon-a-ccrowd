import {
  fetchAllDirectors,
  fetchDirectorById,
  insertDirector,
  modifyDirectorById,
  removeDirectorById,
} from "../models/directors.js";

export async function getDirectors(req, res) {
  try {
    const authors = await fetchAllDirectors();
    res.status(200).json({ status: "success", data: authors });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

export async function getDirectorById(req, res) {
  try {
    const id = req.params.id;
    const author = await fetchDirectorById(id);
    if (!author) {
      return res
        .status(404)
        .json({ status: "fail", message: "Author not found" });
    }
    res.status(200).json({ status: "success", data: author });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

export async function createDirector(req, res) {
  try {
    const { first_name, last_name } = req.body;
    if (!first_name || !last_name) {
      return res
        .status(400)
        .json({ status: "fail", message: "Missing required fields" });
    }
    const author = await insertDirector(first_name, last_name);
    res.status(201).json({ status: "success", data: author });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

export async function updateDirectorById(req, res) {
  try {
    const id = req.params.id;
    const { first_name, last_name } = req.body;
    if (!first_name || !last_name) {
      return res
        .status(400)
        .json({ status: "fail", message: "Missing required fields" });
    }
    const author = await modifyDirectorById(id, first_name, last_name);
    if (!author) {
      return res
        .status(404)
        .json({ status: "fail", message: "Author not found" });
    }
    res.status(200).json({ status: "success", data: author });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

export async function deleteDirectorById(req, res) {
  try {
    const id = req.params.id;
    const author = await removeDirectorById(id);
    if (!author) {
      return res
        .status(404)
        .json({ status: "fail", message: "Author not found" });
    }
    res.status(204).send(); // 204 No Content
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

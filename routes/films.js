import express from "express";
import {
  getFilms,
  getFilmById,
  createFilm,
  updateFilmById,
  deleteFilmById,
} from "../controllers/films.js";

const router = express.Router();

//put router handlers in here
router.get("/", getFilms);
router.get("/:id", getFilmById);
router.post("/", createFilm);
router.patch("/:id", updateFilmById);
router.delete("/:id", deleteFilmById);

export default router;

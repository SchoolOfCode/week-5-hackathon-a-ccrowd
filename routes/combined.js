import express from "express";
import { getDirectorsandFilms, getDirectorByNameParams } from "../controllers/combined.js";

const router = express.Router();

router.get("/", getDirectorsandFilms);

//add route handler with first'last name parameters

router.get("/search", getDirectorByNameParams);

export default router;

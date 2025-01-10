import express from "express";
import { getDirectorsandFilms } from "../controllers/combined.js";

const router = express.Router();

router.get("/", getDirectorsandFilms);

export default router;

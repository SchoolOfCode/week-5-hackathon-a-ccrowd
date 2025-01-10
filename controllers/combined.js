import { fetchDirectorsandFilms } from "../models/combined.js";

export async function getDirectorsandFilms(req, res) {
  console.group("GET /books hit");
  try {
    const result = await fetchDirectorsandFilms();
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

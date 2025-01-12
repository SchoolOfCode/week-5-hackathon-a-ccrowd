import { fetchDirectorsandFilms, fetchDirectorByNameParams } from "../models/combined.js";

export async function getDirectorsandFilms(req, res) {
  console.group("GET /books hit");
  try {
    const result = await fetchDirectorsandFilms();
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

//query parameters with object destructuring first last name

export async function getDirectorByNameParams (req, res) {
  try {
    const lastName = req.query.lastname
    const firstName = req.query.firstname;
    //console.log(typeof lastName);
    const result= await fetchDirectorByNameParams(firstName, lastName);
    res.status(200).json({status: "success", data: result});
  } catch (error) {
    res.status(500).json({status: "error", message: error.message});
  }
}
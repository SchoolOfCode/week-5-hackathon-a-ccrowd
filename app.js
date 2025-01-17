//import modules

import express from "express";
import morgan from "morgan";

import directorsRouter from "./routes/directors.js";
import filmsRouter from "./routes/films.js";
import combinedRouter from "./routes/combined.js";

// Initialize the express app
const app = express();

// Middleware
app.use(morgan("dev")); // Morgan is used for logging HTTP requests to the console in a developer-friendly format
app.use(express.json()); // express.json() middleware is used to parse incoming JSON requests

// Use sub-routers
app.use("/directors", directorsRouter);

app.use("/films", filmsRouter);
app.use("/directors-films", combinedRouter);

export default app;

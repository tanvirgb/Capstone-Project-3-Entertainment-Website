import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public")); // Serve static files on port 3000 (default  port 3000 if not specified)
app.get("/home", async (req, res) => {
  res.render("index.ejs"); // Render the index.ejs file with the requested data.
});

app.get("/movie", async (req, res) => {
  res.render("movie.ejs"); // Render the movie.ejs file with the requested data.
});

app.get("/anime", async (req, res) => {
  res.render("anime.ejs"); // Render the anime.ejs file with the requested data.
});

app.get("/game", async (req, res) => {
  res.render("game.ejs"); // Render the game.ejs file with the requested data.
});
// Start the server on port 3000 and log a success message.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

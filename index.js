import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public")); // Serve static files on port 3000 (default  port 3000 if not specified)
app.get("/", async (req, res) => {
  res.render("index.ejs"); // Render the index.ejs file with the requested data.
});

// app.get("/movie", async (req, res) => {
//   const options = {
//     method: "GET",
//     url: "https://imdb188.p.rapidapi.com/api/v1/getWeekTop10",
//     headers: {
//       "x-rapidapi-key": "60cfdf5aaamsh6e485e1678797d0p1ecc8djsn5c284ab834c6",
//       "x-rapidapi-host": "imdb188.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await axios.request(options);
//     const movies = response.data.data.map((movie) => ({
//       imageUrl: movie.primaryImage.imageUrl,
//       title: movie.originalTitleText.text,
//       plot: movie.plot.plotText.plainText,
//       year: movie.releaseYear.year,
//       country: movie.releaseDate.country.text,
//       rating: movie.ratingsSummary.aggregateRating,
//     }));
//     res.render("movie.ejs", { movies }); // Render the movie.ejs file with the requested data.
//   } catch (error) {
//     console.error("Error:", error.message);
//     res.status(500).send("Error retrieving movie data.");
//   }
// });

app.get("/movie", async (req, res) => {
  res.render("movie.ejs"); // Render the movie.ejs file with the requested data.
});

app.get("/music", async (req, res) => {
  res.render("music.ejs"); // Render the music.ejs file with the requested data.
});

app.get("/anime", async (req, res) => {
  res.render("anime.ejs"); // Render the anime.ejs file with the requested data.
});

app.get("/game", async (req, res) => {
  res.render("game.ejs"); // Render the game.ejs file with the requested data.
});

app.get("/randomMovie", async (req, res) => {
  res.render("randomMovie.ejs"); // Render the randomMovie.ejs file with the requested data.
});

app.get("/randomAnime", async (req, res) => {
  res.render("randomAnime.ejs"); // Render the randomAnime.ejs file with the requested data.
});

app.get("/randomGame", async (req, res) => {
  res.render("randomGame.ejs"); // Render the randomGame.ejs file with the requested data.
});
// Start the server on port 3000 and log a success message.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

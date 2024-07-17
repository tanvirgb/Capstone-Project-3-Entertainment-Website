import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public")); // Serve static files on port 3000 (default  port 3000 if not specified)
app.get("/", async (req, res) => {
  res.render("index.ejs"); // Render the index.ejs file with the requested data.
});

app.get("/movie", async (req, res) => {
  const options = {
    method: "GET",
    url: "https://imdb188.p.rapidapi.com/api/v1/getWeekTop10",
    headers: {
      "x-rapidapi-key": "60cfdf5aaamsh6e485e1678797d0p1ecc8djsn5c284ab834c6",
      "x-rapidapi-host": "imdb188.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const movies = response.data.data.map((movie) => ({
      imageUrl: movie.primaryImage.imageUrl,
      title: movie.originalTitleText.text,
      plot: movie.plot.plotText.plainText,
      year: movie.releaseYear.year,
      country: movie.releaseDate.country.text,
      rating: movie.ratingsSummary.aggregateRating,
    }));
    res.render("movie.ejs", { movies }); // Render the movie.ejs file with the requested data.
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send("Error retrieving movie data.");
  }
});

app.get("/anime", async (req, res) => {
  const options = {
    method: "GET",
    url: "https://myanimelist.p.rapidapi.com/anime/top/all",
    params: { p: "1" },
    headers: {
      "x-rapidapi-key": "60cfdf5aaamsh6e485e1678797d0p1ecc8djsn5c284ab834c6",
      "x-rapidapi-host": "myanimelist.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const anime = response.data.slice(0, 10).map((anime) => ({
      imageUrl: anime.picture_url,
      title: anime.title,
      rank: anime.rank,
      type: anime.type,
      score: anime.score,
    }));
    res.render("anime.ejs", { anime }); // Render the anime.ejs file with the requested data.
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send("Error retrieving anime data.");
  }
});

app.get("/game", async (req, res) => {
  const options = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    headers: {
      "x-rapidapi-key": "60cfdf5aaamsh6e485e1678797d0p1ecc8djsn5c284ab834c6",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const games = response.data.slice(0, 10).map((game) => ({
      imageUrl: game.thumbnail,
      title: game.title,
      description: game.short_description,
      genre: game.genre,
      platform: game.platform,
      publisher: game.publisher,
      developer: game.developer,
      url: game.game_url,
    }));
    res.render("game.ejs", { games }); // Render the game.ejs file with the requested data.
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send("Error retrieving game data.");
  }
});

app.get("/randomMovie", async (req, res) => {
  const options = {
    method: "GET",
    url: "https://imdb188.p.rapidapi.com/api/v1/getFanFavorites",
    params: { country: "US" },
    headers: {
      "x-rapidapi-key": "60cfdf5aaamsh6e485e1678797d0p1ecc8djsn5c284ab834c6",
      "x-rapidapi-host": "imdb188.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const randomMovie =
      response.data.data.list[
        Math.floor(Math.random() * response.data.data.list.length)
      ];
    const movie = {
      imageUrl: randomMovie.primaryImage.imageUrl,
      title: randomMovie.originalTitleText.text,
      plot: randomMovie.plot.plotText.plainText,
      year: randomMovie.releaseYear.year,
      country: randomMovie.releaseDate.country.text,
      rating: randomMovie.ratingsSummary.aggregateRating,
    };
    res.render("randomMovie.ejs", { movie }); // Render the randomMovie.ejs file with the requested data.
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send("Error retrieving movie data.");
  }
});

app.get("/randomAnime", async (req, res) => {
  const options = {
    method: "GET",
    url: "https://myanimelist.p.rapidapi.com/anime/top/all",
    params: { p: "1" },
    headers: {
      "x-rapidapi-key": "60cfdf5aaamsh6e485e1678797d0p1ecc8djsn5c284ab834c6",
      "x-rapidapi-host": "myanimelist.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const randomAnime =
      response.data[Math.floor(Math.random() * response.data.length)];
    const anime = {
      imageUrl: randomAnime.picture_url,
      title: randomAnime.title,
      rank: randomAnime.rank,
      type: randomAnime.type,
      score: randomAnime.score,
    };
    res.render("randomAnime.ejs", { anime }); // Render the randomAnime.ejs file with the requested data.
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send("Error retrieving anime data.");
  }
});

app.get("/randomGame", async (req, res) => {
  const options = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    headers: {
      "x-rapidapi-key": "60cfdf5aaamsh6e485e1678797d0p1ecc8djsn5c284ab834c6",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const randomGame =
      response.data[Math.floor(Math.random() * response.data.length)];
    const game = {
      imageUrl: randomGame.thumbnail,
      title: randomGame.title,
      description: randomGame.short_description,
      genre: randomGame.genre,
      platform: randomGame.platform,
      publisher: randomGame.publisher,
      developer: randomGame.developer,
      url: randomGame.game_url,
    };
    res.render("randomGame.ejs", { game }); // Render the randomGame.ejs file with the requested data.
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send("Error retrieving game data.");
  }
});
// Start the server on port 3000 and log a success message.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

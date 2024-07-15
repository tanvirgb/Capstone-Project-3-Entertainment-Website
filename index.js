import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public")); // Serve static files on port 3000 (default  port 3000 if not specified)
app.get("/", async (req, res) => {
  // try {
  //   const options = {
  //     method: "GET",
  //     url: "https://imdb-top-100-movies.p.rapidapi.com/",
  //     headers: {
  //       "x-rapidapi-key": "60cfdf5aaamsh6e485e1678797d0p1ecc8djsn5c284ab834c6",
  //       "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
  //     },
  //   };

  //   try {
  //     const response = await axios.request(options);
  //     res.render("index.ejs", {
  //       biimage0: response.data[0].big_image,
  //       big_image1: response.data[1].big_image,
  //       big_image2: response.data[2].big_image,
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // } catch (error) {
  //   try {
  //     const options = {
  //       method: "POST",
  //       url: "https://imdb188.p.rapidapi.com/api/v1/getPopularMovies",
  //       headers: {
  //         "x-rapidapi-key":
  //           "60cfdf5aaamsh6e485e1678797d0p1ecc8djsn5c284ab834c6",
  //         "x-rapidapi-host": "imdb188.p.rapidapi.com",
  //         "Content-Type": "application/json",
  //       },
  //       data: {
  //         country: {
  //           anyPrimaryCountries: ["IN"],
  //         },
  //         limit: 200,
  //         releaseDate: {
  //           releaseDateRange: {
  //             end: "2029-12-31",
  //             start: "2020-01-01",
  //           },
  //         },
  //         userRatings: {
  //           aggregateRatingRange: { max: 10, min: 6 },
  //           ratingsCountRange: { min: 1000 },
  //         },
  //         genre: {
  //           allGenreIds: ["Action"],
  //         },
  //         runtime: {
  //           runtimeRangeMinutes: { max: 120, min: 0 },
  //         },
  //       },
  //     };

  //     try {
  //       const response = await axios.request(options);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  res.render("index.ejs"); // Render the index.ejs file with the requested data.
});

// Start the server on port 3000 and log a success message.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

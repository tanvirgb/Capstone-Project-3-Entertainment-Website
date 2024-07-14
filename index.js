import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public")); // Serve static files on port 3000 (default  port 3000 if not specified)
app.get("/", (req, res) => {
  res.render("index.ejs", { test: "Hello world!" });
});

// Start the server on port 3000 and log a success message.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

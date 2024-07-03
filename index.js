import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

var firstName = "";
var lastName = "";

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  console.log(req.body, req.body["fName"], req.body["lName"]);
  const numOfLetters = req.body["fName"].length + req.body["lName"].length;
  res.render("index.ejs", { numberOfLetters: numOfLetters });
});

// app.post("/submit", (req, res) => {
//   const numLetters = req.body["fName"].length + req.body["lName"].length;
//   res.render("solution.ejs", { numberOfLetters: numLetters });
// });

// app.post("/submit", (req, res) => {
//   const numLetters = req.body["fName"].length + req.body["lName"].length;
//   res.render("solution.ejs", { numberOfLetters: numLetters });
// });

// app.post("/submit", (req, res) => {});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

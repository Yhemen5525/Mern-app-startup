/** @format */

const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

// app.use(cors());

const cakes = [
  { username: "cake1", preparedBy: "Amanda" },
  { username: "cake2", preparedBy: "Irene" },
  { username: "cake3", preparedBy: "Jane" },
];

app.get("/", (req, res) => {
  res.send(cakes);
});

app.get("/firstItem", (req, res) => {
  res.send(cakes[0]);
});

//production assigned port
let PORT = process.env.PORT || 500;

//Server static assets if in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client" / "build", "index.html"));
  });
} else {
  //load env file
  require("dotenv").config({ path: "config/config.env" });
}

app.listen(PORT, () => {
  console.log("sever is listening on port " + PORT);
});

"use strict";
const express = require("express");
const cors = require("cors");
const getDataBase = require("./routes/notion-database.js");
const getMainPage = require("./routes/notion-mainpage.js");
const getBlockChildren = require("./routes/notion-blocks.js");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.static("public"));

app.get("/database", async (req, res) => {
  const db = await getDataBase();
  res.json(db);
});

app.get("/mainpage", async (req, res) => {
  const page = await getMainPage();
  res.json(page);
});

app.get("/block-children", async (req, res) => {
  const page = await getBlockChildren();
  res.json(page);
});

let allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
};

app.use(allowCrossDomain);

app.listen(PORT, console.log(`Server started on port ${PORT}`));

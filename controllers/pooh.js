const express = require('express')
const app = express()
// const JSON = app.json()
const poohQuotes = require("../models/poohquotes");

module.exports = {
  getIndex: (req, res) => {
          res.render("index.ejs");
        },
  getPooh: (req, res) => {
    res.json(poohQuotes)
  }
};

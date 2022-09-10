const express = require('express')
const app = express()
// const JSON = app.json()
const poohQuotes = require("../models/poohquotes");

module.exports = {
  getIndex: (req, res) => {
          res.render("index.ejs");
          console.log(`There are ${8} Pooh Quotes to enjoy!`)
        },
  getPooh: (req, res) => {
    res.json(poohQuotes)
  },
  getRandom: (req, res) => {
    const randomPooh = () => {
        let a = Math.floor(Math.random() * 8);
        return poohQuotes[a]
    } 
    console.log('Random Pooh Summoned')
    res.json(randomPooh())
  }
};

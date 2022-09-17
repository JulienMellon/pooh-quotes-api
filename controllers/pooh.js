const express = require('express')
const app = express()
// const JSON = app.json()
const poohQuotes = require("../models/poohquotes");

module.exports = {
  getIndex: (req, res) => {
          res.render("index.ejs");
          console.log(`There are ${8} Pooh Quotes to enjoy!`)
        },
  getAll: (req, res) => {
    res.json(poohQuotes)
  },
  getPooh: (req, res) => {
    let query = req.params.query
    res.json(poohQuotes[query])
  },
  getRandom: (req, res) => {
    const randomPooh = () => {
        let a = Math.floor(Math.random() * 20);
        return poohQuotes.data[a]
    } 
    console.log('Random Pooh Summoned')
    res.json(randomPooh())
  },
  piglet: (request,response)=>{
    console.log(request.params.tigger)
    const userQuery = request.params.tigger
    let showThis = poohQuotes.data.filter(x => x.author == userQuery)
    console.log(showThis)
    if( showThis[0]){
        response.json(showThis)
    }else{
        // show default poohquote
        response.json(poohQuotes[2])
    }
    
  }
};

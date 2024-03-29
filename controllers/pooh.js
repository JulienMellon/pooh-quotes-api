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
        let a = Math.floor(Math.random() * 20);
        return poohQuotes.data[a]
    } 
    console.log('Random Pooh Quote Summoned')
    res.json(randomPooh())
  },
  piglet: (request,response)=>{
    console.log(request.params.piglet)
    const piglet = request.params.piglet
  
    if( poohQuotes[piglet] ){
        response.json(poohQuotes[piglet])
    }else{
        response.json(poohQuotes[2])
    }
    
  }
};
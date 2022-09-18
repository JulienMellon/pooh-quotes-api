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
    const querry = req.query;// query = {sex:"female"}
  
    const params = req.params; //params = {id:"000000"}
    let query = req.params.query
    let qq = req.query.data
    console.log(querry)
    console.log(params)
    // res.send('user' + req.params.query)
    const {quote, author, tags} = req.query;
    console.log (`quote ${quote}`)
    console.log (`atuhor ${author}`)
    console.log (`tags ${tags}`)
    if (querry){
      res.json(poohQuotes.data.filter( x => author in x ? true: false ) )
    }else{
      res.json(poohQuotes.data[2])
    }
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
    console.log(`tigger ${request.params.tigger}`)
    console.log(`query ${request.query}`)
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

//Variables
const express = require('express')
const app = express()
const cors = require('cors')
const poohRoutes = require('./routes/main')
const poohQuotes = require("./models/poohquotes");

// environment variables
require("dotenv").config();


//Public folder
app.use(express.static("public"));

// for displaying docs
app.set("view engine", "ejs");

//cors
// app.use(cors())

//body parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", poohRoutes);

// app.get('/api/:piglet',(request,response)=>{
//   console.log(request.params.piglet)
//   const piglet = request.params.piglet

//   if( poohQuotes[piglet] ){
//       response.json(poohQuotes[piglet])
//   }else{
//       response.json(poohQuotes[2])
//   }
  
// })


app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT ${process.env.PORT} , hurry up it's getting away!`);
  });
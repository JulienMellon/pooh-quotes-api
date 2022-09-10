//Variables
const express = require('express')
const app = express()
const poohRoutes = require('./routes/main')

// environment variables
require("dotenv").config();


//Public folder
app.use(express.static("public"));

// for displaying docs
app.set("view engine", "ejs");

//body parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", poohRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT ${process.env.PORT} , hurry up it's getting away!`);
  });
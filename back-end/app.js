const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db.js");

const port = process.env.PORT;

dotenv.config();


const app = express();

app.listen(port, ()=>{
    connectDB();
    console.log("GIAN STARTING TO CODE @5000");
})
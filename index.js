const express = require("express");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://mahakjuriani:Q1OE881PppLiigIU@cluster0.xk4gquj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Db Connected");
  })
  .catch((err) => {
    console.log("Failed" , err);
  });

//Product Schema

const productSchema = new mongoose.Schema({
    productName : {
        type : String, 
        required : true
    },
    productPrice : {
        type : String,
        required : true
    },
    isInStock : {
        type : Boolean,
        required : true
    },
    category : {
        type : String,
        required : true
    }
});



const app = express();

app.listen(8080, () => {
  console.log("Server sarted at port 8080");
});
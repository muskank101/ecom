const port = 4000;
const express=require("express"); //importing express
const app=express();
const mongoose = require(mongoose);
const jwt=require("jsonwentoken");
const multer = require("multer");
const path = require("path")
const cors = require("cors")

app.use(express.json());
app.use(cors());

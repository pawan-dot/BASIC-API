const express = require("express");
require("dotenv").config({ path: "./config/.env" });
const cookieParser = require("cookie-parser");
var bodyParser = require('body-parser');
var path = require('path');
const app = express();


app.use(express.json());
app.use(cookieParser());


//fetch data from the request
app.use(bodyParser.urlencoded({ extended: false }));





// Route Imports
const product = require("./routes/product");
const user = require("./routes/userRoute");

app.use("/api", product);
app.use("/api", user);



module.exports = app;






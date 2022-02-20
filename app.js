const express = require("express");
const app = express();

require('dotenv').config({ path: "Backend/config/config" })



app.use(express.json())



// Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
// const order = require("./routes/orderRoute");
// const payment = require("./routes/paymentRoute");

app.use('/api', product);

module.exports = app;
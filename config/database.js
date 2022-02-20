const mongoose = require("mongoose");
//process.env.DB_URI
const connectDatabase = () => {
    mongoose
        .connect("mongodb://localhost:27017/Ecomerce", {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        }).then((data) => {
            console.log(`Mongodb connected with server: ${data.connection.host}`);
        }).catch((err) => {
            console.log(err)
        })
};

module.exports = connectDatabase
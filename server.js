const app = require("./app");
const connectDatabase = require("./config/database");

require('dotenv').config({ path: "Backend/config/config" })
// console.log(process.env.PORT)



// Connecting to database
connectDatabase();

app.listen(process.env.PORT, () => {
    console.log(`Server  is working on http://localhost:${process.env.PORT}`);
});
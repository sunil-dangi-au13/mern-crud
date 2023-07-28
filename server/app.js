require("dotenv").config();
//  const dbConnect = require('./db/conn.js')
const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const mongoose = require("mongoose");

// dbConnect()
const users = require("./models/userSchema");
const cors = require("cors");
const router = require("./routes/router");
// const dbConnect = require("./db/conn");

const port = process.env.PORT || 3000;
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    UseUnifiedTopology:true,
}).then(()=>{
    console.log("MONGODB CONNECTED");
}).catch((error)=>{
    console.log("DB CONNECTION FAILED");
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.json("server start")
})

app.use(router);

app.listen(port, () => {
    console.log(`server is start port number ${port}`);
});
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute");
const chatRoute = require("./Routes/chatRoute");
const messageRoute = require("./Routes/messageRoute");
const app = express();
require("dotenv").config();
 
// const multer = require("multer");
// const upload = multer();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/api/users",userRoute);
app.use("/api/chats",chatRoute);
app.use("/api/messages",messageRoute);

const port = process.env.PORT || 8080;
const uri = process.env.ATLAS_URI;

app.get("/", (req, res) => {
    res.send("Welcome to Chat App APIs...");
})

app.listen(port, (req, res) => {
    console.log(`Listening on port... : ${port}`);
})

mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB connection established")).catch((error) => console.log("MongoDB connection failed: ",error.message))
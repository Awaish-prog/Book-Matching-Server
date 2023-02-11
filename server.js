const express = require("express")
const app = express()
const cors = require("cors")
const {saveUserData, createUser} = require("./Controllers/UserDataController")
const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
require('dotenv').config()
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECT);

app.post("/api/createUser", createUser)

app.post("/api/saveUserData", saveUserData)

app.listen("4000", () => {
    console.log("server running");
})
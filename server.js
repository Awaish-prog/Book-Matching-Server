const express = require("express")
const app = express()
const cors = require("cors")
const {saveUserData, createUser} = require("./Controllers/UserDataController")
const {getBookMatchingData} = require("./Controllers/GetBookMatchingData")
const {authenticate} = require("./MiddleWare/Athenticate")
const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
require('dotenv').config()
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken")
mongoose.connect(process.env.DB_CONNECT);


app.post("/api/createUser", createUser)

app.post("/api/saveUserData", authenticate, saveUserData)

app.get("/api/getBookMatchingData", authenticate, getBookMatchingData)

app.listen("4000", () => {
    console.log("server running");
})
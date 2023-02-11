const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())

app.post("/api/saveUserData", (req, res) => {
    console.log("received");
})

app.listen("4000", () => {
    console.log("server running");
})
require('dotenv').config()
const jwt = require("jsonwebtoken")

function authenticate(req, res, next){
    if(!req.headers['token']){
        res.json({status: false, message: "Authentication failed"})
    }
    const decodedToken = jwt.verify(req.headers['token'], process.env.KEY)
    if(decodedToken.name === req.body.name.toLowerCase()){
        next()
    }
    else{
        res.json({status: false, message: "Authentication failed"})
    }
}

module.exports = {authenticate}
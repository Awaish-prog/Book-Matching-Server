const User = require('../models/userModel')
const jwt = require("jsonwebtoken")
require('dotenv').config()

async function saveUserData(req, res){
    const name = req.body.name.toLowerCase()
    await User.updateOne({
        name: name
    }, {
        genres: req.body.genres,
        books: req.body.books
    })
    res.json({status: true})
}

async function createUser(req, res){
    const name = req.body.name.toLowerCase()
    if(await User.findOne({name: name})){
        const token = jwt.sign({
            name: name
        }, process.env.KEY);
        res.json({status: true, token: token})
    }
    else{
        await User.create(
            {
                name,
                genres: [],
                books: []
            }
        )
        const token = jwt.sign({
            name: name
        }, process.env.KEY);
        res.json({status: true, token: token})
    }
}

module.exports = {saveUserData, createUser}
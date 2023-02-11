const User = require('../models/userModel')

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
        res.json({status: true})
    }
    else{
        await User.create(
            {
                name,
                genres: [],
                books: []

            }
        )
        res.json({status: true})
    }
}

module.exports = {saveUserData, createUser}
const mongoose = require('mongoose')

const User = new mongoose.Schema({
    name: { type: String, required: true },
    genres: [ { type: String } ],
    books: [ { type: String } ]
})

const user = mongoose.model("user", User);
module.exports = user;
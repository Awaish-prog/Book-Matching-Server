const User = require('../models/userModel')

const genrePoints = {
    "Tragedy": 10,
    "Novel": 20,
    "Drama": 30,
    "Biography": 40
}

const bookPoints = {
    "Macbeth": 50,
    "King Lear": 60,
    "The Great Gatsby": 70,
    "Catch-22": 80,
    "The Kite Runner": 90,
    "Hamlet": 100,
    "Steve Jobs": 110,
    "Wings of Fire": 120
}

async function getBookMatchingData(req, res){
    const data = await User.find()
    const bookMatchingData = []
    const allGenresAndBooks = Object.keys(genrePoints).concat(Object.keys(bookPoints))
    data.forEach((item) => {
        bookMatchingData.push({
            name: item.name,
            data: []
        })
        for(const genre in genrePoints){
            if(item.genres.includes(genre)){
                bookMatchingData[bookMatchingData.length - 1]["data"].push(genrePoints[genre])
            }
            else{
                bookMatchingData[bookMatchingData.length - 1]["data"].push(0)
            }
        }
        for(const book in bookPoints){
            if(item.books.includes(book)){
                bookMatchingData[bookMatchingData.length - 1]["data"].push(bookPoints[book])
            }
            else{
                bookMatchingData[bookMatchingData.length - 1]["data"].push(0)
            }
        }
    })
    res.json({status: true, allGenresAndBooks, bookMatchingData})
}

module.exports = {getBookMatchingData}
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://userone:userone@cluster0.vcc0q.mongodb.net/Notes')
.then(()=>{
    console.log('Mongo DB connection established successfully')
})
.catch(err => console.log('Error connecting', err.message))
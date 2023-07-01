const mongoose = require('mongoose')
const noteSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
})

const noteModel = mongoose.model('Notes', noteSchema)
module.exports =noteModel
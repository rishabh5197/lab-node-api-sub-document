const mongoose = require('mongoose')
var { Lesson } = require('./lessonSchema')
var squadSchema = new mongoose.Schema(
    { name: String,
        id: Number,
        
        lessonId: [{type:mongoose.Schema.Types.ObjectId, ref:"Lesson"}],
        cohort: String
    },
    {collection:"users"}
)
const Squad=mongoose.model('Squad',squadSchema)
module.exports = {Squad}
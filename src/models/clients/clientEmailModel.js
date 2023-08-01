const mongoose = require('mongoose')

const clientEmailSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true
    }

},{timestamps:true});
module.exports = mongoose.model("clientEmail", clientEmailSchema)
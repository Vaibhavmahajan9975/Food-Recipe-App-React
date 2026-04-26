
const mongoose =require('mongoose');


const infoSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String
})
module.exports = mongoose.model('user-info', infoSchema)

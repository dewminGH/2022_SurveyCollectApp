const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    GoogleId : String,
    UserEmail: String,
    Icon : String,
    Credits : {type : Number , default : 0}
})

mongoose.model('user' , userSchema);
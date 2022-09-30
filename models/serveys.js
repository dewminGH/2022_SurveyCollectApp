const mongoose = require('mongoose');
const {Schema} = mongoose;
const recipientSchema = require('./recipient');


const surveySchema = new Schema({
    title : String,
    subject : String,
    body : String,
    recipients : [recipientSchema],
    yes : {type : Number , default : 0},
    no : {type : Number , default : 0},
    _user : {type : Schema.Types.ObjectId , ref : 'User'},
    dataSent : Date,
    lastRespond : Date
})

mongoose.model('survey' , surveySchema);
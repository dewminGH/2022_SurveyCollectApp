const requireLogin = require("../middleware/requireLogin");
const requireCreditBal = require("../middleware/requireCreditBal");
const mongoose = require('mongoose');

const Survey = mongoose.model('survey');
const Mailer = require('../service/Mailer');
const template = require('../service/mailerTemple');

const _ = require('lodash');
const {Path} = require('path-parser');
const {URL} = require('url');

module.exports = app =>{

    app.get('/api/surveys', async(req,res)=>{
        const data=await Survey.find({
            _user: req.user.id
        })
        res.send(data)
    }) 

    app.post('/api/surveys/webhooks', (req,res)=>{
        const p = new Path('/surveys/feedback/:id/:vote');

        _.chain(req.body)
         .map(event =>{
            const pathname = new URL(event.url).pathname;
            const data=p.test(pathname);
            if(data)
            return {email : event.email , SurveyId :data.id , vote: data.vote };
        })
        .compact()
        .uniqBy('email','SurveyId')
        .each( ({SurveyId,email,vote}) => {
            Survey.updateOne({
                _id : SurveyId,
                recipients:{
                    $elemMatch: { email : email, responded : false}
                }
            },{
                $inc : {[vote] : 1},
                $set: {'recipients.$.responded': true},
                lastRespond: new Date()
            }).exec();
        })
        .value()

        res.send({});
    })
   
    app.post('/api/surveys' , requireLogin ,requireCreditBal, async(req,res)=>{
        const { title , subject , body , recipients } = req.body;
        const survey=new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => ( {email : email.trim()} )),
            _user : req.user.id,
            dateSent : Date.now()
        });

        const mailer = new Mailer(survey , template(survey)) //body htmls

        try{
        await mailer.send();
        await survey.save();
        req.user.Credits-=1;
        const user = await req.user.save();
        res.send(user);
        }catch(err){
            res.status(422).send(err)
        }
    })
}
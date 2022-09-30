const mongoose = require('mongoose');
const passport= require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('../config/keys');
const User = mongoose.model('user');

passport.use(new GoogleStrategy({
    clientID : keys.GoogleClientID,
    clientSecret : keys.GoogleClientSecret,
    callbackURL : '/auth/google/callback',
    proxy : true
    
},( acessToken , RefreshToken , {id,emails,photos} , done)=>{
    User.findOne( { GoogleId : id } ).then(  exsistUser  =>{
           if(exsistUser)
           done(null , exsistUser);
           else
           {new User({ GoogleId: id,
                       UserEmail: emails[0].value,
                       Icon: photos[0].value
                       })
           .save()
           .then(user => done(null , user));
        }
    })
   
}
));


passport.serializeUser( (user , done) => {
    done(null , user.id);
});

passport.deserializeUser( (id , done) => {  
    User.findById(id).then( user =>{
        done(null , user);
    })
})

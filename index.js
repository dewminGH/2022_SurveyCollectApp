const express = require('express');
const mongoose =require('mongoose');
const cookieSession =require('cookie-session');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const passport = require('passport');

require('./models/user');
require('./models/serveys');
require('./service/passport');

mongoose.connect(keys.MongoURL);

const app = express();

app.use(bodyParser.json());

app.use( cookieSession({
    maxAge : 30*24*60*60*1000,
    keys : [keys.cookie]
})
)

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if(process.env.NODE_ENV==='production'){
    app.use(express.static('FrontEnd/build'));

    const path = require('path');
    app.get('*' , (req,res) =>{
        res.sendFile(path.resolve(__dirname , 'FrontEnd' , 'build' , 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);


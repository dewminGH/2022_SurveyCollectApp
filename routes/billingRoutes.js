const KEYS =require('../config/keys');
const Stripe = require('stripe')(KEYS.stripeSecretKey);
const RequirLogin = require('../middleware/requireLogin');

module.exports = app =>{
    app.post('/api/stripe' , RequirLogin, async(req,res)=>{
       
        const charge= await Stripe.charges.create({
            amount : 500,
            currency : 'usd',
            description : 'Emaliy Credits Purches',
            source : req.body.id
        });
       req.user.Credits += 5;
       const user = await req.user.save();
       res.send(user); 
    })
}
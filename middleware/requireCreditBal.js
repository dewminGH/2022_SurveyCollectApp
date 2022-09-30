module.exports= (req,res,next)=>{
    if(req.user.Credits < 1)
    return res.send({err : 'Insufficient Credit Balance'});
    next();
}
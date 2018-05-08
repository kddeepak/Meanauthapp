const express= require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const passport = require('passport');

router.post('/register',(req,res,next)=>{
  
    let newUser = new User({
        name : req.body.name,
        email: req.body.email,
        username:req.body.username,
        password : req.body.password
});

    User.addUser(newUser,(err,user)=>{
        if(err){
            res.json({success:false,message:'failed to register'});
        }
        else{
            res.json({success:true,message:'user registered'});
        }
    });
  
});

router.post('/authenticate',(req,res,next)=>{
    res.send("AUTHENTICATE");
});

router.get('/profile',(req,res,next)=>{
    res.send("PROFILE");
});



module.exports = router;
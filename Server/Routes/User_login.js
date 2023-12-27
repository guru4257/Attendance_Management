const express = require('express')
const userLoginer = express.Router()
const validUser = require('../Middleware/login')

//  Login Router
userLoginer.post('/',validUser,async(req,res)=>{

    const{userID,userType} = req.body;
    try{
        return res.json({
            Success : 'True',
            Message : "Login Successful!",
            userType : userType,
            userID : userID,

        })
    }catch(err){
        console.log(err)
        return res.json({
            Success : 'False',
            Message: "There is a Error in Logging In! Please Try again after sometimes..."
        })
    }
})

module.exports = userLoginer
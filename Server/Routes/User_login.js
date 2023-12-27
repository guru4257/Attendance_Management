const express = require('express')
const userLoginer = express.Router()
const validUser = require('../Middleware/login')


userLoginer.post('/',validUser,(req,res)=>{
    try{
        return res.json({
            Success : 'True',
            Message : "Login Successful!"
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
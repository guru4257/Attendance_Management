const express = require('express')
const logouter = express.Router()

logouter.get('/',(req,res)=>{
    try{
        const clearcookie = res.clearCookie("user_id");
        const getcookie = req.cookies["user_id"]
        return res.json({
            Success : 'True',
            Message : "Logout Successfull"
        })
        
    }catch(error){
        return res.json({
            Success : "False",
            Message : "There is an error in logging out..."
        })
    }
})

module.exports = logouter
const express = require('express');
const sessionvalidator = require('../Middleware/session_validator');
const { Faculty } = require('../Database/Schema');
const addFacultyRouter = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Adding Faculty Router
addFacultyRouter.post('/',sessionvalidator,async(req,res)=>{

     const{employeeID, employeeName, Password, Department} = req.body;

     try{

        const existFaculty = await Faculty.find({employeeID:employeeID});

        if(existFaculty.length !== 0){
            return res.json({
                Success : 'False',
                Message : "Hey Admin! You Already added this Faculty..."
            })
        }else{
              
            const hashPassowrd = await bcrypt.hash(Password,saltRounds);
              const newFaculty = new Faculty({
                 employeeID : employeeID,
                 employeeName : employeeName,
                 Department : Department,
                 Password :hashPassowrd
              })

              await newFaculty.save();
              return res.json({
                Success : "True",
                Message : " Faculty Added Succesfully"
             })
        }

     }catch(err){
        console.log(err);
        return res.json({
            Success : 'False',
            Message: "Hey Admin! there is an error in adding Faculty! please try again later..."
        })
     }
})


module.exports = addFacultyRouter;
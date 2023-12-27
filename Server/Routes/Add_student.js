const express = require('express');
const addStudentRouter = express.Router();
const bcrypt = require('bcrypt')
const saltRounds = 10
const sessionvalidator = require('../Middleware/session_validator.js');
const { Student } = require('../Database/Schema');

// Router for adding one student by admin
addStudentRouter.post('/', sessionvalidator ,async(req,res)=>{

    const{studentName,rollNumber,Batch,Department,registerNumber,Password} = req.body;

    try{

        const existUser = await Student.find({rollNumber:rollNumber});

        if(existUser.length !== 0){

            return res.json({
                Success : 'False',
                Message : "Hey Admin! You Already added this Student..."
            })
        }else{
             const hashpassword = await bcrypt.hash(Password, saltRounds)
             const newStudent = new Student({
                rollNumber : rollNumber,
                registerNumber : registerNumber,
                Batch : Batch,
                Department : Department,
                studentName : studentName,
                Password : hashpassword
             })

             await newStudent.save();

             return res.json({
                Success : "True",
                Message : " Student Added Succesfully"
             })
        }

    }catch(err){
        console.log(err);
        return res.json({
            Success : 'False',
            Message: "Hey Admin! there is an error in adding student! please try again later..."
        })
    }
})

module.exports = addStudentRouter;
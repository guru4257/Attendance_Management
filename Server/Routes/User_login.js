const express = require('express')
const userLoginer = express.Router()
const validUser = require('../Middleware/login');
const { Student, Faculty } = require('../Database/Schema');

//  Login Router
userLoginer.post('/',validUser,async(req,res)=>{

    const{userID,userType} = req.body;
    try{

        if(userType === 'Student'){
             
            const student = await Student.find({rollNumber:userID});

            const Batch = student[0].Batch;
            const studentName = student[0].studentName;
            const Department = student[0].Department;

            return res.json({
                Success : 'True',
                Message : "Login Successful!",
                userType : userType,
                userID : userID,
                Batch : Batch,
                userName : studentName,
                Deparment : Department
    
            })
        }else if(userType === 'Faculty'){

             const faculty = await Faculty.find({employeeID:userID});

             const Department = faculty[0].Department;
             const facultyName = faculty[0].employeeName;
            
             return res.json({
                Success : 'True',
                Message : "Login Successful!",
                userType : userType,
                userID : userID,
                userName : facultyName,
                Deparment : Department
    
            })
        }else{

             return res.json({
                Success : 'True',
                Message : "Login Successful!",
                userType : userType,
                userID : userID,
            })
        }
        
    }catch(err){
        console.log(err)
        return res.json({
            Success : 'False',
            Message: "There is a Error in Logging In! Please Try again after sometimes..."
        })
    }
})

module.exports = userLoginer
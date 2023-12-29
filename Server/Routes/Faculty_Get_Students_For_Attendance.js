const express = require('express');
const { Student } = require('../Database/Schema');

const studentProviderForAttendance = express.Router();

// Router for fetching the particular Department students

studentProviderForAttendance.post('/',async(req,res)=>{
     
      const{Department,facultyName} = req.body;

      try{

           const students = await Student.find({$and:[{Department:Department},{facultyName:facultyName}]});
           
            return res.json({
                Success : 'True',
                Message : "Students fetched Succesfully...",
                students : students
            })

      }catch(err){
        console.log(err);
        return res.json({
            Success : 'False',
            Message: "Hello Faculty! there is an error in Fetching your student data's! please try again later..."
        })
      }
})

module.exports = studentProviderForAttendance;
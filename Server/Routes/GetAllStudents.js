const express = require('express');
const { Student } = require('../Database/Schema');

const allStudentsProvider = express.Router();

// Route for getting all Students

allStudentsProvider.get('/',async(req,res)=>{

     try{
         
         const students = await Student.find();

          return res.json({
            Success : "True",
            Message : "Students fetched Successfully",
            students:students
          })
     }catch(err){
        console.log(err);
        return res.json({
            Success : 'False',
            Message: "Hello Admin! there is an error in Fetching your student data's! please try again later..."
        })
     }
})

module.exports = allStudentsProvider;
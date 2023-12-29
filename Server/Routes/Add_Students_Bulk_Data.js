const express = require('express');
const convertCsvToDf = require('../Pandas/convertCSVtoJson');

const bulkDataAdder = express.Router();
const multer = require("multer");
const { Student } = require('../Database/Schema');

// logic for storing csv file
const upload = multer({
    
    storage : multer.diskStorage({
        destination : (req,file,cb)=>{cb(null,"Student_CSV_Data")},
        filename:(req,file,cb)=>{
             console.log(file)
            cb(null,"students.csv")
        }
    })
  })

// Router for Adding Bulk Data

bulkDataAdder.post('/',upload.single("StudentData"),async(req,res)=>{
    
    

    try{
        let outData =convertCsvToDf("./Student_CSV_Data/students.csv");
        const StudentsData = await Student.insertMany(outData);

        res.json({
            Success : 'True',
            Message : "Hey Admin! Student Data's are Added Succesfully"
        })
    }catch(err){
          
        console.log(err);
        return res.json({
            Success : 'False',
            Message: "Hey Admin! there is an error in adding student data's! please try again later..."
        })
    }

    
    
})



module.exports = bulkDataAdder;
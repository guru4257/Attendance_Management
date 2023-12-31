const express = require('express');
const sessionvalidator = require('../Middleware/session_validator');
const { Faculty, Class } = require('../Database/Schema');
const availableClassesAndFacultiesProvider = express.Router();

availableClassesAndFacultiesProvider.post('/',async(req,res)=>{
          
       const{ Batch, Department } = req.body;
       console.log(Batch,Department);

       try{
            
            const available_Faculties = await Faculty.find({$and:[{Department:Department},{isAssigned:false}]});
            const remaining_Classes = await Class.find({$and:[{
                criteria : {
                    Batch : Batch,
                    Department : Department
                }
            },{facultyID:{$eq:'0000'}}]});

            const facultiesNames = available_Faculties.map((ele)=>{

                   const obj = {
                      employeeID : ele.employeeID,
                      employeeName : ele.employeeName
                   }
                   return obj;
            })

            const Classes = remaining_Classes.map((ele)=>{
                  
                return ele.name;
            })

            return res.json({
                Success :'True',
                Message : 'Successfully fetched',
                faculties : facultiesNames,
                classes : Classes
            })
       }catch(err){
        console.log(err);
        return res.json({
            Success : 'False',
            Message: "Hey Admin! there is an error in fetching Availabe Classes and Faculties! please try again later..."
        })
       }
})

module.exports = availableClassesAndFacultiesProvider;
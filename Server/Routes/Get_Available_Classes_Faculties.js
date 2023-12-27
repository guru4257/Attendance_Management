const express = require('express');
const sessionvalidator = require('../Middleware/session_validator');
const { Faculty, Class } = require('../Database/Schema');
const availableClassesAndFacultiesProvider = express.Router();

availableClassesAndFacultiesProvider.post('/',sessionvalidator,async(req,res)=>{
          
       const{ Batch, Department } = req.body;

       try{
          
            const available_Faculties = await Faculty.find({$and:[{Batch:Batch},{Department:Department},{isAssigned:false}]});
            const remaing_Classes = await Class.find({$and:[{Batch:Batch},{Department:Department},{faculty:null}]});

            return res.json({
                Success :'True',
                Message : 'Successfully fetched',
                faculties : available_Faculties,
                classes : remaing_Classes
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
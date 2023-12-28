const express = require('express');
const sessionvalidator  = require('../Middleware/session_validator');
const { Class } = require('../Database/Schema');

const addClassesRouter = express.Router();

addClassesRouter.post('/',sessionvalidator,async(req,res)=>{

    const{name,Batch,Department} = req.body;

    try{

        const existClass = await Class.find({$and:[{name:name},{criteria:{
             Batch : Batch,
             Department : Department
        }}]});

        if(existClass.length!==0){
            return res.json({
                Success : 'False',
                Message : "Hey Admin! You Already added this Class..."
            })
        }else{

             const newClass = new Class({
                name : name,
                criteria : {
                    Batch : Batch,
                    Department : Department
                }
             })

             await newClass.save();
             return res.json({
                Success : "True",
                Message : " Class Added Succesfully"
             })
        }

    }catch(err){
        console.log(err);
        return res.json({
            Success : 'False',
            Message: "Hey Admin! there is an error in adding Class! please try again later..."
        })
    }
})

module.exports = addClassesRouter;
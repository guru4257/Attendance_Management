const express = require('express');
const sessionvalidator = require('../Middleware/session_validator');
const { Class } = require('../Database/Schema');
const facultyAssigner = express.Router();

facultyAssigner.post('/',sessionvalidator,async(req,res)=>{
      
        const{faculty, name, Batch, Department, from, to} = req.body;

        try{

            const updation = await Class.updateOne({$and:[{name:name},{Batch:Batch},{Department:Department}]},{
                $set : {
                    name : name,
                    criteria : {
                        Batch : Batch,
                        Department : Department,
                        rollNoLimit : {

                            from : from,
                            to : to
                        }
                    },
                    faculty : faculty
                }
            })

            if(updation.modifiedCount >= 0){

                return res.json({
                    Success : "True",
                    Message :"Hey Admin! Successfully Assinged Faculty to the mentioned class..."
                })
            }else if(updation.modifiedCount<0){
                res.json({
                  Success : 'True',
                  Message : "There is an Error in Assigning the Faculty..."
                })
            }

        }catch(err){
            console.log(err);
            return res.json({
                Success : 'False',
                Message: "Hey Admin! there is an error in assigning faculty to class! please try again later..."
            })
        }
})

module.exports = facultyAssigner;
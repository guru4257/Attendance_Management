const express = require('express');
const sessionvalidator = require('../Middleware/session_validator');
const { Class, Student } = require('../Database/Schema');
const facultyAssigner = express.Router();

// Router for Assining faculty to the class..
facultyAssigner.post('/',sessionvalidator,async(req,res)=>{
      
        const{faculty, name, Batch, Department, from, to} = req.body;

        try{
            
           
            const alreadyAssinedData = await Class.find({criteria:{
                Batch:Batch,
                Department : Department,
                rollNoLimit : {
                    from : from,
                    to : to
                }
            }});

            const studentsExist =  await Student.find({$and:[{Batch:Batch},{Department:Department}]});

            if(to > studentsExist.length){

                return res.json({
                    Success : 'False',
                    Message : "Hey Admin! You provided Roll NumberLimit is Larger than student strength, Please provide Roll Numbers Limit - to value correctly...."
                })
                
            }

            if(alreadyAssinedData.length!==0){

                return res.json({
                    Success : 'False',
                    Message : "Hey Admin! You Already assinged Faculty for this Roll NumberLimit, Please Assign for next set of Roll Numbers...."
                })
            }
            else{

                const updation = await Class.updateOne({$and:[{name:name},{
                    'criteria.Batch':Batch,
                    'criteria.Department':Department
                }]},{
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
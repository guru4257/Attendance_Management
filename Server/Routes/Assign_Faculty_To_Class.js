const express = require('express');
const sessionvalidator = require('../Middleware/session_validator');
const { Class, Student, Faculty } = require('../Database/Schema');
const facultyAssigner = express.Router();

// Router for Assining faculty to the class..
facultyAssigner.post('/',async(req,res)=>{
      
        const{faculty, name, Batch, Department} = req.body;

        try{
            
           
            const alreadyAssinedData = await Class.find({$and:[{name:name},{
                criteria : {
                    Batch : Batch,
                    Department : Department
                }
            }]});
            console.log(alreadyAssinedData)
            if(alreadyAssinedData[0].facultyID !== '0000'){

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
                        },
                        facultyID : faculty
                    }
                })
    
                if(updation.modifiedCount >= 0){
                    
                    const updateFaculty = await Faculty.updateOne({$and:[{Department:Department},{employeeID:faculty}]},{
                        $set : {
                            isAssigned : true
                        }
                    });

                    if(updateFaculty.modifiedCount >= 0){

                        const faculty1 = await Faculty.find({$and:[{Department:Department},{employeeID:faculty}]});

                        const name = faculty1[0].employeeName;
                        const updateStudent = await Student.updateMany({$and:[{Batch:Batch},{Department:Department}]},{$set:{facultyName:name}});

                        if(updateStudent.modifiedCount >= 0){
                            return res.json({
                                Success : "True",
                                Message :"Hey Admin! Successfully Assinged Faculty to the mentioned class..."
                            })
                        }else{

                            return res.json({
                                Success : 'False',
                                Message : "There is an Error in Assigning the Faculty..."
                              })

                        }
                        
                    }else{

                        return res.json({
                            Success : 'False',
                            Message : "There is an Error in Assigning the Faculty..."
                          })
                    }
                }else if(updation.modifiedCount<0){
                    return res.json({
                      Success : 'False',
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
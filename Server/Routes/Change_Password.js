const express = require('express');

const passwordChanger = express.Router();
const bcrypt = require('bcrypt');
const sessionvalidator = require('../Middleware/session_validator');
const { Student, Faculty } = require('../Database/Schema');
const saltRounds = 10;

// Router for Changing Password
passwordChanger.post('/',sessionvalidator,async(req,res)=>{
     
       const{userType,userID,Batch,Department,newPassword} = req.body;

       try{
            const Password = await bcrypt.hash(newPassword,saltRounds);
            if(userType === 'Student'){

                const studentPassswordUpdate = await Student.updateOne({$and:[{Batch:Batch},{Department:Department},{rollNumber:userID}]},{
                    $set : {
                        Password : Password
                    }
                })
                if(studentPassswordUpdate.modifiedCount >= 0){
                    return res.json({
                        Success : "True",
                        Message :"Hello User! Successfully Changed your password..."
                    })
                }else{

                    return res.json({
                        Success : 'False',
                        Message : "There is an Error in Changing Password, Please try again later..."
                      })

                }
            }else if(userType === 'Faculty'){

                const facultyPasswordUpdate = await Faculty.updateOne({$and:[{Department:Department},{employeeID:userID}]},{
                    $set : {
                        Password : Password
                    }
                })

                if(facultyPasswordUpdate.modifiedCount >= 0){
                    return res.json({
                        Success : "True",
                        Message :"Hello User! Successfully Changed your password..."
                    })
                }else{

                    return res.json({
                        Success : 'False',
                        Message : "There is an Error in Changing Password, Please try again later..."
                      })

                }

            }
       }catch(err){

            console.log(err);
            return res.json({
                Success : 'False',
                Message: "Hello User! there is an error in Changing Password! please try again later..."
            })
       }
})

module.exports = passwordChanger;
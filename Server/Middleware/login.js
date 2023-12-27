const express = require('express')
const bcrypt = require('bcrypt')
const { Student, Faculty, Admin } = require('../Database/Schema')

// login middleware
const validUser = async(req,res,next)=>{
       
       console.log('login');
    try{

        const {userType,userID,Password} = req.body
        if(userType==='Student'){
            const userDetails = await Student.find({studentID:userID})
            if(userDetails.length===0){
                return res.json({
                    Success : 'False',
                    Message : "UserID Does not Exists! Please Try again with the valid One."
                })
            }else{
                const studentPassword = userDetails[0].Password
                const validPassword = await bcrypt
                .compare(Password, studentPassword)
                .then(async(result) => {
                    if(result===false){
                        return res.json({
                            Success : 'False',
                            Message : "Invalid Password!"
                        })
                    }else{
                        res.cookie("user_id",userDetails[0]._id,{httpOnly:true});
                        next()
                    }
                })
            }
        }else if(userType==='Faculty'){
            const facultyDetails = await Faculty.find({employeeID : userID})
            if(facultyDetails.length===0){
                return res.json({
                    Success : 'False',
                    Message : "UserID Does not Exists! Please Try again with the valid One."
                })
            }else{
                const facultyPassword = facultyDetails[0].Password
                const validPassword = await bcrypt
                .compare(Password, facultyPassword)
                .then(async(result) => {
                    if(result===false){
                        return res.json({
                            Success : 'False',
                            Message : "Invalid Password!"
                        })
                    }else{
                        res.cookie("user_id",facultyDetails[0]._id,{httpOnly:true});
                        next()
                    }
                })
            }
        }else if(userType==='Admin'){
            const adminDetails = await Admin.find({adminID:userID})
            if(adminDetails.length===0){
                return res.json({
                    Success : 'False',
                    Message : "UserID Does not Exists! Please Try again with the valid One."
                })
            }else{
                const adminPassword = adminDetails[0].Password;
                // const validPassword = await bcrypt
                // .compare(Password, adminPassword)
                // .then(async(result) => {
                //     if(result===false){
                //         return res.json({
                //             Success : 'False',
                //             Message : "Invalid Password!"
                //         })
                //     }else{
                //         res.cookie("user_id",adminDetails[0]._id,{httpOnly:true});
                //         next()
                //     }
                // })

                if(Password !== adminPassword){
                    return res.json({
                                    Success : 'False',
                                    Message : "Invalid Password!"
                           })
                }else{
                    res.cookie("user_id",adminDetails[0]._id,{httpOnly:true});
                    next();
                }
            }
        }
    }catch(err){
        console.log(err)

        return res.json({
            Success : 'False',
            Message: "There is a Error in Logging In! Please Try again after sometimes..."
        })
    }
}


module.exports = validUser
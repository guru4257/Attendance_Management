const express = require('express');
const { Class, Student } = require('../Database/Schema');

const attendanceUploader = express.Router();

// Router for uploading the Attendance

attendanceUploader.post('/',async(req,res)=>{

    const{present,absent,od,date, Department, facultyID, facultyName} = req.body;
    
    try{
          
         var absentees = await Class.findOne({$and:[{'criteria.Department':Department},{facultyID:facultyID}]}).absentees;
         console.log(absentees);
         if(absentees == undefined) absentees = {};
         if(absentees[date] == undefined){
            console.log(date);
             absentees[date] = absent;
             await Class.updateOne({$and:[{'criteria.Department':Department},{facultyID:facultyID}]},{
                $set : {
                    absentees:absentees
                }
             })


             await Class.updateOne({$and:[{'criteria.Department':Department},{facultyID:facultyID}]},{
                 $set : {totalDaysOfAttendence:Object.keys(absentees).length}
             })

             for(var sid of absent){
                 await Student.updateOne({$and:[{Department:Department},{facultyName:facultyName},{rollNumber:sid}]},{
                    $inc :{
                        absent : 1
                    }
                 })
             }
            
             for(var sid of present){

                await Student.updateOne({$and:[{Department:Department},{facultyName:facultyName},{rollNumber:sid}]},{
                    $inc :{
                        present : 1
                    }
                })
            }
            for(var sid of od){

                await Student.updateOne({$and:[{Department:Department},{facultyName:facultyName},{rollNumber:sid}]},{
                    $inc : {
                        OD : 1
                    }
                })
            }

            return res.json({
                Success : "True",
                Message : "Hello Faculty! Attedance uploaded Successfully"
            })
         }else{
             
             return res.json({
                Success :'False',
                Message :" Hello Faculty! You already uploaded the Attedance "
             })
         }

    }catch(err){
        console.log(err);
            return res.json({
                Success : 'False',
                Message: "Hello Faculty! there is an error in uploading Attendance! please try again later..."
            })
    }
})

module.exports = attendanceUploader;
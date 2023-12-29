const express = require('express');
const { Class, Student } = require('../Database/Schema');

const attendanceUploader = express.Router();

// Router for uploading the Attendance

attendanceUploader.post('/',async(req,res)=>{

    const{present,absent,od,date, Department, facultyID, facultyName} = req.body;
    
    try{
          
         const absentees = await Class.findOne({$and:[{'criteria.Department':Department},{facultyID:facultyID}]});
         
         if(absentees[date] === null){
            
             absentees[date] = absent;
             await Class.updateOne({$and:[{'criteria.Department':Department},{facultyID:facultyID}]},{
                $set : {
                    absentees:absentees
                }
             })

             await Class.updateOne({$and:[{'criteria.Department':Department},{facultyID:facultyID}]},{
                 $inc : {totalDaysOfAttendence:1}
             })

             for(var sid in absent){

                 await Student.updateOne({$and:[{Department:Department},{facultyName:facultyName},{rollNumber:sid}]},{
                    $inc :{
                        'Attendace.absent':1
                    }
                 })
             }
             for(var sid in present){

                await Student.updateOne({$and:[{Department:Department},{facultyName:facultyName},{rollNumber:sid}]},{
                   $inc :{
                       'Attendace.present':1
                   }
                })
            }
            for(var sid in od){

                await Student.updateOne({$and:[{Department:Department},{facultyName:facultyName},{rollNumber:sid}]},{
                   $inc :{
                       'Attendace.OD':1
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
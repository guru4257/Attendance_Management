const { Db } = require('./Config.js')
const mongoose = require('mongoose')
const mongodb = require('mongodb')


const studentSchema = new mongoose.Schema({
    rollNumber : {
        type : String
    },
    registerNumber : {
        type : Number
    },
    Batch : {
        type : String
    },
    Department : {
        type : String
    },
    studentName : {
        type : String
    },
    Password : {
        type : String
    },
    Attendace : {
         present : {
            type : Number
         },
         absent :{
            type : Number
         }
    }
})


const facultySchema = new mongoose.Schema({
    employeeID : {
        type : String
    },
    employeeName :{ 
        type : String
    },
    Password : {
        type : String
    },
    Department : {
        type  : String
    },
    isAssigned : {
        type : Boolean,
        default : false
    }
})

const adminSchema = new mongoose.Schema({
    adminID : {
        type : String
    },
    Password : {
        type : String
    }
})


const classSchema = new mongoose.Schema({

     name:{
        type : String
     },
     criteria :{

        Batch : {
            type : String
        },
        Department : {
            type : String
        },
        rollNoLimit : {
             from : {
                type : Number
             },
             to : {
                type : Number
             }
        }
     },
     totalDaysOfAttendence : {
        type : Number
     },
     faculty : {
        type : String
     }
})

// const attendanceSchema = new mongoose.Schema({
//     studentName : {
//         type : String
//     },
//     Batch : {
//         type : String
//     },
//     Department : {
//         type : String
//     },
//     Date : {
//         type : Number
//     },
//     Month : {
//         type : Number
//     },
//     Year : {
//         type : Number
//     },
//     Period1 : {
//         type : String
//     },
//     Period2 : {
//         type : String
//     },
//     Period3 : {
//         type : String
//     },
//     Period4 : {
//         type : String
//     },
//     Period5 : {
//         type : String
//     },
//     Period6 : {
//         type : String
//     },
//     Period7 : {
//         type : String
//     }
// })

module.exports = {
    Student : Db.model('Student',studentSchema,'STUDENT'),
    Faculty : Db.model('Faculty',facultySchema,'FACULTY'),
    Admin : Db.model('Admin',adminSchema,'ADMIN'),
    // Attendance : Db.model('Attendance',attendanceSchema,'ATTENDANCE'),
    Class : Db.model('Class',classSchema,"CLASS")
}
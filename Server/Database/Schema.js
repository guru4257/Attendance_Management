const { Db } = require('./Config.js')
const mongoose = require('mongoose')
const mongodb = require('mongodb')


const studentSchema = new mongoose.Schema({
    userType : {
        type : String
    },
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
    }
})


const facultySchema = new mongoose.Schema({
    userType : {
        type : String
    },
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
    }
})

const adminSchema = new mongoose.Schema({
    userType : {
        type : String
    },
    adminID : {
        type : String
    },
    Password : {
        type : String
    }
})


const attendanceSchema = new mongoose.Schema({
    studentName : {
        type : String
    },
    Batch : {
        type : String
    },
    Department : {
        type : String
    },
    Date : {
        type : Number
    },
    Month : {
        type : Number
    },
    Year : {
        type : Number
    },
    Period1 : {
        type : String
    },
    Period2 : {
        type : String
    },
    Period3 : {
        type : String
    },
    Period4 : {
        type : String
    },
    Period5 : {
        type : String
    },
    Period6 : {
        type : String
    },
    Period7 : {
        type : String
    }
})

module.exports = {
    Student : Db.model('Student',studentSchema,'STUDENT'),
    Faculty : Db.model('Faculty',facultySchema,'FACULTY'),
    Admin : Db.model('Admin',adminSchema,'ADMIN'),
    Attendance : Db.model('Attendance',attendanceSchema,'ATTENDANCE')
}
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userLoginer = require('./Routes/User_login')
const cors = require('cors');
const addStudentRouter = require('./Routes/Add_student')
const addClassesRouter = require('./Routes/Add_Classes')
const addFacultyRouter = require('./Routes/Add_Faculty')
const facultyAssigner = require('./Routes/Assign_Faculty_To_Class')
const availableClassesAndFacultiesProvider = require('./Routes/Get_Available_Classes_Faculties')
const logouter = require('./Routes/Logout')
const passwordChanger = require('./Routes/Change_Password')
const bulkDataAdder = require('./Routes/Add_Students_Bulk_Data')
const studentProviderForAttendance = require('./Routes/Faculty_Get_Students_For_Attendance')
const attendanceUploader = require('./Routes/Upload_Attendance_By_Faculty')
const allStudentsProvider = require('./Routes/GetAllStudents')

app.use("*",cors({
    origin : true,
    credentials:true
  }));

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser());

// user Login Route
app.use('/user/login',userLoginer);

// user logout Route
app.use('/user/logout',logouter);

// adding one student by admin - Route
app.use('/admin/addStudent',addStudentRouter);

// adding classes by admin - Route
app.use('/admin/addClass',addClassesRouter);

// adding Faculty by admin - Route
app.use('/admin/addFaculty',addFacultyRouter);

//Assining Faculty to the Particular Class - Route
app.use('/admin/assignFacultyToClass',facultyAssigner);

// fetching available faculties and reamianing classes - Route
app.use('/admin/getAvailable/classes/faculties',availableClassesAndFacultiesProvider);

// Updating user password - Route
app.use('/user/changePassword',passwordChanger);

// Adding Bulk Data of Students - Route
app.use('/admin/addBulkData',bulkDataAdder);

// fetching students for particular faculty for providing attendance
app.use('/faculty/getStudentsForAttendance',studentProviderForAttendance);

// uploading the students attendnace by daywise - Route
app.use('/faculty/uploadAttedance',attendanceUploader); 

// fecthcing all the students
app.use('/admin/getAll',allStudentsProvider);

app.listen(5000,()=>{
    console.log('Server Listening to Port Number 5000...')
})
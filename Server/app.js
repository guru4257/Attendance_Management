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

app.use("*",cors({
    origin: true,
    credentials: true
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



app.listen(5000,()=>{
    console.log('Server Listening to Port Number 5000...')
})
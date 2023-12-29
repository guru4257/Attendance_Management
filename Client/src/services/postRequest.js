import axios from 'axios';

const url = process.env.REACT_APP_BACKEND_API;

//login request
export const LoginReq = async(userData)=>{

      return await axios.post(url+"/user/login",userData);
}

//post request for adding one student
export const addStudent = async(student)=>{

      return await axios.post(url+'/admin/addStudent',student,{withCredentials:true});
}

//post request for adding class
export const addClass = async(classData)=>{

      return await axios.post(url+'/admin/addClass',classData,{withCredentials:true});
}

// post request for adding Faculty
export const addFaculty = async(faculty)=>{

       return await axios.post(url+'/admin/addFaculty',faculty,{withCredentials:true});
}

// post request for getting available Classes and Faculties for particular Deprtment
export const getAvailableClassesandFaculties = async(data)=>{

      return await axios.post(url+"/admin/getAvailable/classes/faculties",data,{withCredentials:true});
}

// post request for assingning faculty to classe
export const assignFaculty = async(data)=>{

      return await axios.post(url+"/admin/assignFacultyToClass",data,{withCredentials:true});
}

// post request for user changing password
export const changePasswordFor = async(data)=>{

      return await axios.post(url+'/user/changePassword',data,{withCredentials:true});
}

// post request for adding bulk data
export const addBulkStudentData = async(data)=>{

      return await axios.post(url+"/admin/addBulkData",data,{withCredentials:true});
}

// post request for getting the particular department students for appropriate Faculty
export const getStudetsForAttendsPage = async(data)=>{

      return await axios.post(url+"/faculty/getStudentsForAttendance",data,{withCredentials:true});
}  

// post request for uploading attendace
export const uploadAttendanceByFaculty = async(data)=>{

       return await axios.post(url+'/faculty/uploadAttedance',data,{withCredentials:true});
}


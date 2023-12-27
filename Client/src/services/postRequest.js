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


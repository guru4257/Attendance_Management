import axios from 'axios';

const url = process.env.REACT_APP_BACKEND_API;

// get request for user logout

export const logOut = async()=>{
     
     return await axios.get(url+'/user/logout',{withCredentials:true});
}

//getRequest for fetching all students

export const fetchAll = async()=>{

     return await axios.get(url+"/admin/getAll",{withCredentials:true});
}
import axios from 'axios';

const url = process.env.REACT_APP_BACKEND_API;

//login request
export const LoginReq = async(userData)=>{
      console.log("HI");
      return await axios.post(url+"/user/login",userData);
}


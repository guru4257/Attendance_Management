import axios from 'axios';

const url = process.env.REACT_APP_BACKEND_API;

//login request
export const LoginReq = async(userData)=>{

      return axios.post(REACT_APP_BACKEND_API+"/user/login",userData);
}


import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LoginReq } from "../services/postRequest";
import { notify } from "../services/toastify";


const Login = ()=>{

    const [userData, setUserData] = useState({
        userID: "",
        Password: "",
        userType:""
      });
    
      const navigate = useNavigate();

      //handling onchange values
      const onHandleChange = (event) => {
        const { name, value } = event.target;
    
        setUserData({ ...userData, [name]: value });
      };
    
      // sending request on submitting
      const onHandleSubmit = (event) => {
        event.preventDefault();
        console.log(userData);
        LoginReq(userData).then((res)=>{

               if(res.data.Success === 'True'){
                    sessionStorage.setItem('isAuth',true);
                    navigate('/');
                    setUserData({
                      userID: "",
                      Password: "",
                      userType:""
                    });
                           
               }else{
                    notify(res.data.Message,"warning");
               }
        }).catch((err)=>{
             
               notify(err.response.data.Message,"error");
        })
      };

      //  return to Dashboard if LoggedIn and does not allowed to Login Page
    
      if(sessionStorage.getItem('isAuth')){
        navigate('/');
      }
      return (
        <>
        <section > 
          <div className="container-fluid h-custom" style={{marginTop:"100px"}}>
            <div className="row d-flex justify-content-center align-items-center h-100" >
              <div className="col-md-7 col-lg-4 col-xl-5" >
                <img
                  src="login1.png"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
              <div className="col-md-5 col-lg-4 col-xl-4 offset-xl-1">
              <h2 style={{textAlign:"center",color:"blue"}}><strong>LOG IN</strong></h2>
                <br></br>
                <form onSubmit={onHandleSubmit}>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example3"
                      name="userID"
                      value={userData.userID}
                      onChange={onHandleChange}
                      className="form-control form-control-lg"
                      placeholder="Enter a valid userID"
                    />
                    <label className="form-label" for="form3Example3">
                      User ID
                    </label>
                  </div>
    
                  <div className="form-outline mb-3">
                    <input
                      type="password"
                      id="form3Example4"
                      name="Password"
                      value={userData.Password}
                      onChange={onHandleChange}
                      className="form-control form-control-lg"
                      placeholder="Enter password"
                    />
                    <label className="form-label" for="form3Example4">
                      Password
                    </label>
                  </div>
                  <div className="form-outline mb-3">
                    <select
                      id="form3Example5"
                      name="userType"
                      value={userData.userType}
                      onChange={onHandleChange}
                      className="form-control form-control-lg"
                      required
                    >
                      {" "}
                      <option value="">User Type</option>
                      <option value="Admin">Admin</option>
                      <option value="Faculty">Faculty</option>
                      <option value="Student">Student</option>
                    </select>
                    <label className="form-label" for="form3Example5">
                      User Type
                    </label>
                  </div>
                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button
                      type="submit"
                      className="btn btn-primary btn-sm"
                      style={{ paddingLeft: " 2.5rem", paddingRight: "2.5rem" }}
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        </>
       
      );
}

export default Login;
import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";


const SignUp = ()=>{

    const [userData, setUserData] = useState({
        username: "",
        password: "",
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
      };

      //  return to Dashboard if LoggedIn and does not allowed to Login Page
    
    //   if(sessionStorage.getItem('isAuth')){
    //     navigate('/');
    //   }
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
              <h2 style={{textAlign:"center",color:"blue"}}><strong>SIGN UP</strong></h2>
                <br></br>
                <form onSubmit={onHandleSubmit}>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example3"
                      name="username"
                      value={userData.username}
                      onChange={onHandleChange}
                      className="form-control form-control-lg"
                      placeholder="Enter a valid user Name"
                    />
                    <label className="form-label" for="form3Example3">
                      User Name
                    </label>
                  </div>
    
                  <div className="form-outline mb-3">
                    <input
                      type="password"
                      id="form3Example4"
                      name="password"
                      value={userData.password}
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
                      SignUp
                    </button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                      Already have an account?{" "}
                      <Link to="/login" className="link-danger">
                        Log In
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        </>
       
      );
}

export default SignUp;
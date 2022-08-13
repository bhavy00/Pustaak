import React from "react";
import { Route, Navigate } from "react-router-dom";
import { createUser, loginUser } from "../services/apicall";
  
export default function Create() {
  const [signupFormData, setsignupFormData] = React.useState({
    username: "",
    email: "",
    password: "",
    conpass: "",
  });

  const [loginFormData, setloginFormData] = React.useState({
    email: "",
    password: "",
  });

  // functions to handle signup form
  const handleSignup = (event) => {
    event.preventDefault();
    const info = createUser(signupFormData);
    <Route exact path="/signup">
      <Navigate to={{
          pathname: "/dashboard",
          state: info
      }}/>
    </Route>
  };

  const signupFormChange = (event) => {
    const { id, value } = event.target;
    setsignupFormData((prevdata) => {
      return {
        ...prevdata,
        [id]: value,
      };
    });
  };

  // function to handle login form submit
  const handleLogin = (event) => {
    event.preventDefault();
    const info = loginUser(loginFormData)
    if (info === "username or password is incorrect"){
      alert(info)
    }
    else {
      <Route exact path="/signup">
        <Navigate to={{
            pathname: "/dashboard",
            state: info
        }}/>
      </Route>
    }

  };

  const loginFormChange = (event) => {
    const { id, value } = event.target;
    setloginFormData((prevdata) => {
      return {
        ...prevdata,
        [id]: value,
      };
    });
  };
  // functions to switch between login and signup forms
  const loginForm = document.querySelector(".loginform")
  const signupForm = document.querySelector(".signupform")
  const handlelog = () => {
    signupForm.style.display = "none";
    loginForm.style.display = "block";
  };
  const handlesign = () => {
    signupForm.style.display = "block";
    loginForm.style.display = "none";
  };

  return (
    <div className="signlog">
      <div className="select">
        <button type="button" id="log" onClick={handlelog}>
          Login
        </button>
        <button type="button" id="sign" onClick={handlesign}>
          Signup
        </button>
      </div>
      <div className="signupform">
        <form onSubmit={handleSignup}>
          <label for="username">Username: </label> <br />
          <input
            type="text"
            id="username"
            placeholder="Example_001"
            value={signupFormData.username}
            onChange={signupFormChange}
          />{" "}
          <br />
          <label for="email">Email: </label> <br />
          <input
            type="text"
            id="email"
            placeholder="example@gmail.com"
            value={signupFormData.email}
            onChange={signupFormChange}
          />{" "}
          <br />
          <label for="password">Password: </label> <br />
          <input
            type="password"
            id="password"
            value={signupFormData.password}
            onChange={signupFormChange}
          />{" "}
          <br />
          <label for="conpass">Confirm Password</label> <br />
          <input
            type="text"
            id="conpass"
            value={signupFormData.conpass}
            onChange={signupFormChange}
          />
          {signupFormData.password !== signupFormData.conpass && (
            <p>Confirm password and password don't match</p>
          )}
          <br />
          <button>Signup</button>
        </form>
      </div>
      <div className="loginform">
        <form onSubmit={handleLogin}>
          <label for="email">Email: </label> <br />
          <input
            type="email"
            id="email"
            placeholder="example@gmail.com"
            value={loginFormData.email}
            onChange={loginFormChange}
          /> <br />
          <label for="password">Password: </label> <br />
          <input
            type="password"
            id="password"
            value={loginFormData.password}
            onChange={loginFormChange}
          /> <br />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

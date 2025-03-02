import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");
  const navigate = useNavigate();

  const userCreditals = {
    user: "prasad@gmail.com",
    pass: "123123",
  };

  const { user, pass } = userCreditals; // object destructuring

  function enterUser(event) {
    console.log("username", event.target.value);
    setUsername(event.target.value);
  }

  function enterPassword(event) {
    console.log("password", event.target.value);
    setPassword(event.target.value);
  }

  async function registerClicked() {
    const createUser = await axios.post(
      " https://api.escuelajs.co/api/v1/users/",
      {
        name: "Prasad",
        email: user,
        password: pass,
        avatar: "https://picsum.photos/800",
      }
    );

    console.log(createUser.data);
    sessionStorage.setItem("email", createUser.data.email);
    sessionStorage.setItem("name", createUser.data.name);
  
  }

  // function loginClicked(event) {
  //   console.log("login clicked");
  //   event.preventDefault();
  // }
  //   if (username === user && password === pass) {
  //     navigate("/home");
  //   } else {
  //     alert("Invalid credentials");
  //   }
  // }

  // async function authorization() {
  //   const url = await axios.post('https://api.escuelajs.co/api/v1/auth/login', {
  //     email: 'john@mail.com',
  //     password: 'changeme',
  //   });
  //   console.log(url.data.access_token);
  //   setData(url.data.access_token);
  //   localStorage.setItem('authorization', url.data.access_token);
  // }

  async function loginClicked() {
    try {
      const url = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        {
          email: user,
          password: pass,
        }
      );
      console.log(url.data);
      setData(url);
      sessionStorage.setItem("authorized", url.data.access_token);
    } catch (error) {
      console.error("Authorization error:", error);
    }


    const validUser = await axios.get('https://api.escuelajs.co/api/v1/auth/profile',{
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('authorized')}`,
      },
    })
    console.log(validUser.data);
    console.log(validUser.config.headers.Authorization)

    if(sessionStorage.getItem('authorized')){
      navigate("/home");
    }
  }

  sessionStorage.removeItem("token")

  // useEffect(() => {
  //   loginClicked();
  // }, []);

  return (
    <>
      <div className="container">
        <div className="card">
          <div>
            <img
              className="img"
              src="https://i0.wp.com/www.christinasandsengen.com/wp-content/uploads/2014/09/instagram-logo-black-on-white.png"
              alt="image"
            />
          </div>

          <input
            type="text"
            className="input"
            placeholder="username"
            onChange={enterUser}
          />
          <input
            type="password"
            className="input"
            placeholder="password"
            onChange={enterPassword}
          />
          <div>
            <button className="button" onClick={loginClicked}>
              Login
            </button>
            <button className="button" onClick={registerClicked}>
              Register
            </button>
          </div>
          <div>
            <a href="https://www.google.com/">Forget Password?</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

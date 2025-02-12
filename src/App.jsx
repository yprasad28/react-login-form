import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {  //use react hooks for overchange the every updating data 
  const [username, setUsername] = useState("Prasad")
  const [password, setPassword] = useState("123123")

  const userCreditals = {
    user : "Prasad",
    pass : "123123"
  }

  const {user, pass} = userCreditals // object destructuring

  function enterUser(event) { //events for to trigger the elements that listen to every changes and clicks
    console.log("username", event.target.value)
    setUsername(event.target.value)
  }

  function enterPassword(event) {
    console.log("password", event.target.value)
    setPassword(event.target.value)
  }

  function loginClicked() {
    console.log("login clicked")
  
    if (username === user && password === pass) {
      alert("Login Successful")
    } else {
      alert("Invalid credentials")
    }
  }

  return (
    
    <>
    <div className="container">
      <div className="card">
        <div>
          <img className='img' src="https://i0.wp.com/www.christinasandsengen.com/wp-content/uploads/2014/09/instagram-logo-black-on-white.png" 
           alt="image" />
          </div>
          
          <input type="text" className='input' placeholder='username' onChange={enterUser}/>
          <input type="password" className='input' placeholder='password' onChange={enterPassword}/>
          <div>
          <button className='button' onClick={loginClicked}>Login</button>
          </div>
          <div>
            <a href="https://www.google.com/">Forget Password?</a>
          </div>
          <h1>{username}</h1>
          <p>{password}</p>
         
    </div>
      
      </div>
    </>
  )
}

export default App

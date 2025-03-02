import React from 'react'
import "./Homepage.css"
const Homepage = () => {

  function  logout(){
      localStorage.clear();
      window.location.href = '/'
  }
  return (
    <div className='container'>
      <h1>Welcome to instagram</h1>

      <h2 className='loggined'>"You Loggined Successfully"</h2>

      <img className="image" src="https://img.freepik.com/free-vector/vector-businessman-holding-key-open-door_1150-35023.jpg?t=st=1740816289~exp=1740819889~hmac=3b2d4cc0fe4f0c074916935e4ca79e33c29c4ef7f213ec08163a90c042083039&w=900" alt="image" />
      <div>
      <button className='button' onClick={logout}>Log Out</button>
      </div>
    </div>
  )
}

export default Homepage

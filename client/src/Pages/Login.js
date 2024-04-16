import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Login() {
    const [loginDetails,setLoginDetails]=useState({})

    const [error, setError] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(loginDetails);
  };

  const handleChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
 
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
          <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg"
      >
        <h3 className="text-2xl font-semibold mb-6">Enter your details</h3>
            <input
              type="email"
              placeholder="email"
              name="email"
              value={loginDetails.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-64 focus:outline-none focus:border-blue-500"
            />
           
            <br></br>
            <input
              type="password"
              placeholder="password"
              name="password"
              value={loginDetails.password}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-64 focus:outline-none focus:border-blue-500"
            />
        
            <br></br>
            <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg px-6 py-2 font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
         Login
        </button> <Link to={"/signup"} >sign up</Link>
       
            </form>
    </div>

  )
}

export default Login

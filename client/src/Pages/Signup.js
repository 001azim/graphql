import React, { useState } from "react";
import * as Yup from "yup";
import { string } from "yup";
import "../App.css";

function Signup() {
  const [error, setError] = useState({});
  const [signUpDetails, setsignUpDetails] = useState({});

  const userSchema = Yup.object().shape({
    first_name: string()
      .required("first_name is required")
      .matches(/^[a-z]+$/, "Only alphabetic characters allowed"),
    last_name: string()
      .required("last_name is required")
      .matches(/^[a-z]+$/, "Only alphabetic characters allowed"),
    email: string().required("email is required"),
    password: string()
      .oneOf([Yup.ref("password"), null])
      .matches(/[A-Z]/, "Must have number and special characters"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userSchema.validate(signUpDetails, { abortEarly: false });
    } catch (error) {
      if (error.inner) {
        const newError = {};
        error.inner.forEach((eachError) => {
          newError[eachError.path] = eachError.message;
        });
        setError(newError);
      }
    }
  };

  const handleChange = (e) => {
    setsignUpDetails({ ...signUpDetails, [e.target.name]: e.target.value });
    console.log(signUpDetails);
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
          value={signUpDetails.email}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-64 focus:outline-none focus:border-blue-500"
        />
        {error.email && <div className="text-red-500 mb-4">{error.email}</div>}
        <br></br>
        <input
          type="password"
          placeholder="password"
          name="password"
          value={signUpDetails.password}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-64 focus:outline-none focus:border-blue-500"
        />
        {error.password && (
          <div className="text-red-500 mb-4">{error.password}</div>
        )}
        <br></br>{" "}
        <input
          type="text"
          placeholder="first_name"
          name="first_name"
          value={signUpDetails.first_name}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-64 focus:outline-none focus:border-blue-500"
        />
        {error.first_name && (
          <div className="text-red-500 mb-4">{error.first_name}</div>
        )}
        <br></br>
        <input
          type="text"
          placeholder="last_name"
          name="last_name"
          value={signUpDetails.last_name}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-64 focus:outline-none focus:border-blue-500"
        />
        {error.last_name && (
          <div className="text-red-500 mb-4">{error.last_name}</div>
        )}
        <br></br>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg px-6 py-2 font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;

import React, { useState } from "react";
import Nav from "./Navigation";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted", formData);
    Clear();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  function Clear() {
    setFormData({ username: "", email: "", password: "", cpassword: "" });
  }

  return (
    <>
      <div className="bg-[url('C:\Users\acer\Desktop\task\react\Wandermate\src\assets\bgmt.jpg')] h-screen bg-cover ">
        <Nav />
        <form onSubmit={handleSubmit} className="bg-white box-border h-32 w- p-4 border-4" >
          <h1>Sign Up</h1>
          <br />
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <br />
          <br />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Confirm Password"
            name="cpassword"
            value={formData.cpassword}
            onChange={handleChange}
          />
          <br />
          <div className="checkbox">
            <input type="checkbox" />
            <h1>Remember Me</h1>
          </div>
          <br />
          <button className="bg-blue-400" type="submit">
            Sign Up
          </button>
          <br />
          <p>
            New Here? <a href="/signUp">Sign Up</a>
            <br />
          </p>
        </form>
      </div>
    </>
  );
}

export default SignUp;

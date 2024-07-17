import React, { useState } from "react";
import Nav from "./Navigation";
import image from "./assets/signin.jpg";

function SignIn() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", formData);
    Clear()
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  function Clear() {
    setFormData({ username: "", password: "" });

  };

  return (
    <>
      <div className="bg-[url('C:\Users\acer\Desktop\task\react\Wandermate\src\assets\bgmt.jpg')] h-screen bg-cover ">
        <Nav />
        <form onSubmit={handleSubmit} className="bg-white">
          <h1>Sign In</h1>
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
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <br />
          <button className="bg-blue-400" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </>
  );
}

export default SignIn;

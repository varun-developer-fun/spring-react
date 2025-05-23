import React, { useEffect, useState } from "react";
import "./css/register.css";
import { userRegister } from "../../service/userService";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const nav = useNavigate()
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [message]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reg = userRegister(formData);
    reg
      .then((res) => setMessage(res.data))
      .then(() => {
        setFormData({
          name: "",
          username: "",
          password: "",
        });
      }).then(()=>{
       const timer = setTimeout(() => {
      nav('/')
    }, 5000);
    return () => clearTimeout(timer);
      });
  };

  return (
    <>
      <div className="register-wrapper">
        <form className="register-card" onSubmit={handleSubmit}>
          <h2>Create Account</h2>
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Choose a username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="register-btn">
            Register
          </button>
        <p style={{textAlign:"center"}}>
          {message}
        </p>
        </form>
      </div>
    </>
  );
};

export default Register;

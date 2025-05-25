import React, { useState, useEffect } from "react";
import "./css/login.css";
import { userLogin } from "../../service/userService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const nav = useNavigate()
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [message]);

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const log = userLogin(credentials);

    log.then((res) => {
      if (res.data === "") {
        setMessage("Invalid username or password");
        console.log(message);
      }else{
          localStorage.setItem("user", JSON.stringify(res.data));
          localStorage.setItem("token",JSON.stringify(res.data.token))
          nav("/")
      }
    });
  };

  return (
    <div className="login-wrapper">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>
        <p style={{ textAlign: "center" }}>{message}</p>
      </form>
    </div>
  );
};

export default Login;

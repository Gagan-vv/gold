import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  // const [isLogin, setIsLogin] = useState(true);

  // const handleClick = () => {
  //   event.preventDefault();
  //   setIsLogin(!isLogin);
  // };

  // const [name, setName] = useState();
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();

  // const handleSubmitRegister = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("", { name, email, password })
  //     .then((result) => console.log(result))
  //     .catch((err) => console.log(err));
  // };
  const isLogin=1;
  return (
    <>
      {isLogin && (
        <form className="login">
          <img src="/asset/logo.jpg" alt="" className="login-logo" />
          <h1 className="login-title">Login</h1>
          <h3 className="username-ttle">Name</h3>
          <input type="text" className="username" placeholder="Username" />
          <h3 className="password-ttle">Password</h3>
          <input type="text" className="password" placeholder="Password" />
          <a href="/" className="reg-link" onClick={() => handleClick()}>
            <h4 className="login-info">Register</h4>
          </a>
          <a href="/">
            <button className="login-btn">Login</button>
          </a>
        </form>
      )}
      {!isLogin && (
        <form className="login" onSubmit={handleSubmitRegister}>
          <img src="/asset/logo.jpg" alt="" className="login-logo" />
          <h1 className="login-title">Register</h1>
          <h3 className="username-ttle">Name</h3>
          <input
            type="text"
            className="username"
            placeholder="Name"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <h3 className="password-ttle">Email Id</h3>
          <input
            type="text"
            className="username"
            placeholder="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className="password-ttle">Password</h3>
          <input
            type="text"
            className="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="" className="reg-link" onClick={() => handleClick()}>
            <h4 className="login-info">Login</h4>
          </a>
          <a href="/">
            <button className="login-btn">Register</button>
          </a>
        </form>
      )}
    </>
  );
};

export default Login;

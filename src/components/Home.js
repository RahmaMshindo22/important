import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>WELCOME TO SEAFOOD SUPPLIER WEBSITE</h1>
      <p>Thank you for visiting our website. Order any type of seafood directly from here.</p>

      <div className="login-container">
        <form className="login-form" action="ProductList.js" method="post">
          <h2>Login</h2>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="input-group">
            <button type="submit" className="login-button">Login</button>
          </div>
          <div className="links">
            <a href="forgot-password.html">Forgot Password?</a>
            <a href="sign-in.html">Sign In</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;

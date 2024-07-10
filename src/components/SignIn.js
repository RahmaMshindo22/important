import React from 'react';
import './SignIn.css';

const SignIn = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    // You can perform any validation or API calls here
    console.log('Email:', email);
    console.log('Password:', password);
    // Example response message
    document.getElementById('response').innerHTML = `Signing in as ${email}...`;
  };

  return (
    <div className="sign-in-container">
      <h1>REGISTER HERE</h1>
      <p>You can register here and continue exploring our services.</p>
      <div className="container">
        <h1>Register</h1>
        <form id="registrationForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required />
          </div>
          <button type="submit">Register</button>
        </form>
        <div id="response"></div>
      </div>
    </div>
  );
};

export default SignIn;

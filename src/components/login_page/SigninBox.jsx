import React, { useState } from 'react';
import './loginpage.css';

export const SigninBox = () => {
  const initialAction = "Login"; // Initial action value
  const [action, setAction] = useState(initialAction);
  const [data, setData] = useState({
    username: '',
    password: '',
    loginType: action // Initialize loginType with the current action
  });

  const { username, password } = data;

  const changeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    setData({ ...data, username: '', password: '' }); // Reset username and password fields
    window.location.reload(); // Refresh the container upon form submission
    console.log(data);
  };
  

  const handleLoginClick = () => {
    if (action === "Request") {
      setAction(initialAction); // Reset action to initial value
      setData({ ...data, loginType: initialAction, username: '', password: '' }); // Reset form data
    }
  };

  const handleRequestClick = () => {
    if (action === "Login") {
      setAction("Request");
      setData({ ...data, loginType: "Request", username: '', password: '' }); // Reset form data
    }
  };

  return (
    <div className="main-container">
      <div className="signin_container">
        <form onSubmit={submitHandler}>
          <h2>{action}</h2>
          <input type="text" name="username" placeholder="Enter your name" value={username} onChange={changeHandler} required /><br></br>
          <input type="password" name="password" placeholder="Enter your password" value={password} onChange={changeHandler} required /><br></br>
          <div className="submit-container">
            <input
              type={action === "Login" ? "submit" : "button"}
              className={action === "Request" ? "submit grey" : "submit"}
              onClick={handleLoginClick}
              value="Login"
            />
            <input
              type={action === "Login" ? "button" : "submit"}
              className={action === "Login" ? "submit grey" : "submit"}
              onClick={handleRequestClick}
              value="Request"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SigninBox;

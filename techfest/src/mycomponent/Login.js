import "./Registration.css"
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';

const InputWithIcon = ({ placeholder, iconClass }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={`input_group ${isFocused ? 'glowIcon' : ''}`}>
      <i className={`fa ${iconClass}`}></i>
      <input
        type="text"
        placeholder={placeholder}
        className="input_text"
        autoComplete="off"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

const LoginForm = () => {
  return (
    <div className="login_form_container">
      <div className="login_form">
        <h2>Login</h2>
        <InputWithIcon placeholder="Username" iconClass="fa-user" />
        <InputWithIcon placeholder="Password" iconClass="fa-unlock-alt" />
        <div className="button_group" id="login_button">
          <button type="submit">Submit</button>
        </div>
        <div className="footer">
          <NavLink>Forgot Password?</NavLink>
          <NavLink to="Registration">sign up</NavLink>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

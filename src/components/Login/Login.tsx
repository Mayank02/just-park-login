import React from "react";
import Logo from "../../image/just-park-logo-grey-green-3-x@3x.png";
import LoginImage from "../../image/image@3x.png";
import LoginForm from "./Login-form";
import "./style.scss";

function Login() {
  return (
    <div className="row">
      <div className="login-section-wrapper">
        <div className="brand-wrapper">
          <img src={Logo} alt="logo" className="logo" />
        </div>
        <LoginForm />
      </div>

      <div className="image-section-wrapper">
        <img src={LoginImage} alt="Login" className="login-image" />
      </div>
    </div>
  );
}

export default Login;

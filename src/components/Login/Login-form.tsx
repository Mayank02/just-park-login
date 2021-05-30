import React from "react";

function LoginForm() {
  return (
    <div className="login-wrapper my-auto">
      <h1 className="login-title">Sign in</h1>
      <form>
        <div className="form-group">
          <label>User name</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control email-input"
            placeholder="email@justpark.com"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control password-input "
            placeholder="Enter password"
          />

          <a href="#!" className="forgot-password-link">
            Forgot password?
          </a>
        </div>
        <input
          name="login"
          id="login"
          className="login-btn"
          type="button"
          value="Login"
        />
      </form>
    </div>
  );
}

export default LoginForm;

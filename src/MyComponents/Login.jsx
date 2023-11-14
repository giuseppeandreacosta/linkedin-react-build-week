import React from 'react';
import Logo from '../Logo/logo.png';

const Login = (props) => {
  return (
    <div className="container">
      <nav className="nav">
        <a href="/">
          <img src="/images/login-logo.svg" alt="" />
        </a>
        <div>
          <a className="join" href="/">
            Join now
          </a>
          <a className="sign-in" href="/">
            Sign in
          </a>
        </div>
      </nav>
      <section className="section">
        <div className="hero">
          <h1>Welcome to your professional community</h1>
          <img src={Logo} alt="" style={{width:'200px'}}/>
        </div>
        <div className="form">
          <button className="google">
            <img src={Logo} alt="" />
            Sign in with Google
          </button>
        </div>
      </section>
    </div>
  );
};

export default Login;

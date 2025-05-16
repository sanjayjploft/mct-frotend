import React, { useState } from 'react';
import LogoImg from '/logo.svg';
import eyeOffIcon from '/eyeOffIcon.svg';
import eyeIcon from '/eyeIcon.svg';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Login = () => {
   const [showPassword, setShowPassword] = useState(false);
  return (
   
       <>
        <div className="login-page d-flex justify-content-center align-items-center vh-100">
        <div className="login-box col-lg-3 text-center">
          <img src={LogoImg} alt="Login" className='logo-img' />
          <h3 className="heading-text mb-2">Log in to your account </h3>
          <p className='paragraph-text'>Enter your email and password to log in </p>

          <Form>
          {/* Email Input with Floating Label */}
          <Form.Group className="floating-label-input position-relative mb-3">
            <Form.Control
              type="email"
              id="floatingEmail"
              placeholder="Enter email"
            />
            <Form.Label htmlFor="floatingEmail">Email address</Form.Label>
          </Form.Group>
           
          {/* Password Input with Eye Icon and Floating Label */}
          <div className="floating-label-input mb-3 position-relative">
            <Form.Control
              type={showPassword ? 'text' : 'password'}
              id="floatingPassword"
              placeholder="Password"
            />
            <Form.Label htmlFor="floatingPassword">Password</Form.Label>

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="position-absolute top-50 end-0 translate-middle-y me-3"
              style={{ cursor: 'pointer' }}
            >
              <img
                src={showPassword ? eyeOffIcon : eyeIcon}
                alt="Toggle Password"
                width="20"
                height="20"
              />
            </span>
          </div>

          <Button as={Link} to="/Weeks" className="btn-login w-100" type="button">
            Login
          </Button>
        </Form>
        </div>
    </div>
       </>
  );
};

export default Login;

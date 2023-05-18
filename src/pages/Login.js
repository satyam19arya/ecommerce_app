import React from 'react';
import { Helmet } from 'react-helmet';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
      </Helmet>
      <BreadCrumb title="Login" />

      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="login-card">
                        <h3 className='text-center'>Login</h3>
                        <form action='' className='d-flex flex-column gap-20'>
                            <div>
                                <input type='email' name='email' className='form-control' placeholder='Enter your email' />
                            </div>
                            <div>
                                <input type='password' name='password' className='form-control' placeholder='Enter your password' />
                            </div>
                            <Link to='/forgot-password' className='forgot-password'>Forgot Password?</Link>
                            <div className="d-flex justify-content-center gap-13 align-items-center">
                                <button className='login-button border-0'>Login</button>
                                <Link to='/signup' className='button signup'>Signup</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Login;
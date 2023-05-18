import React from 'react';
import { Helmet } from 'react-helmet';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Signup</title>
      </Helmet>
      <BreadCrumb title="Signup" />

      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="login-card">
                <h3 className='text-center'>Create Account</h3>
                <form action='' className='d-flex flex-column gap-20'>
                    <div>
                      <input type='text' name='name' className='form-control' placeholder='Enter your name' />
                    </div>
                    <div>
                      <input type='tel' name='mobile' className='form-control' placeholder='Enter your phone number' />
                    </div>
                    <div>
                      <input type='email' name='email' className='form-control' placeholder='Enter your email' />
                    </div>
                    <div>
                      <input type='password' name='password' className='form-control' placeholder='Enter your password' />
                    </div>
                    <div className="d-flex justify-content-center gap-13 align-items-center">
                      <button className='login-button border-0'>Signup</button>
                      <Link to='/login' className='button signup'>Login</Link>
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

export default Signup;
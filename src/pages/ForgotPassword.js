import React from 'react';
import { Helmet } from 'react-helmet';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Forgot Password</title>
      </Helmet>
      <BreadCrumb title="Forgot Password" />

      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="login-card">
                        <h3 className='text-center'>Reset Your Password</h3>
                        <p className="text-center mt-2 mb-3">We will send you an email to reset your password.</p>
                        <form action='' className='d-flex flex-column gap-20'>
                            <div>
                                <input type='email' name='email' className='form-control' placeholder='Enter your email' />
                            </div>
                            <div className="d-flex justify-content-center gap-13 align-items-center">
                                <button className='login-button border-0' type='submit'>Submit</button>
                                <Link to='/login' className='button signup'>Cancel</Link>
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

export default ForgotPassword;
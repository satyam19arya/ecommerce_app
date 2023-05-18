import React from 'react';
import { Helmet } from 'react-helmet';
import BreadCrumb from '../components/BreadCrumb';

const ResetPassword = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Reset Password</title>
      </Helmet>
      <BreadCrumb title="Reset Password" />

      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="login-card">
                <h3 className='text-center'>Reset Password</h3>
                <form action='' className='d-flex flex-column gap-20'>
                    <div>
                      <input type='password' name='password' className='form-control' placeholder='Enter your password' />
                    </div>
                    <div>
                      <input type='password' name='cpassword' className='form-control' placeholder='Confirm your password' />
                    </div>
                    <div className="d-flex justify-content-center gap-13 align-items-center">
                      <button className='login-button border-0'>Reset</button>
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

export default ResetPassword;
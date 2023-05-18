import React from 'react';
import {Helmet} from "react-helmet";
import BreadCrumb from '../components/BreadCrumb';

const TermsAndConditions = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Terms and conditions</title>
      </Helmet>
      <BreadCrumb title="Terms and conditions" />

      <div className="policy-wrappwe py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy">

              </div>
            </div>
          </div>
        </div>
       </div>
    </>
  )
}

export default TermsAndConditions;
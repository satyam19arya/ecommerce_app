import React from 'react';
import {Helmet} from "react-helmet";
import BreadCrumb from '../components/BreadCrumb';

const RefundPolicy = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Refund Policy</title>
      </Helmet>
      <BreadCrumb title="Refund Policy" />

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

export default RefundPolicy;
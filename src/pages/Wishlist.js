import React from 'react';
import { Helmet } from 'react-helmet';
import BreadCrumb from '../components/BreadCrumb';
import cross from '../images/cross.svg';
import watch from '../images/watch.jpg';

const Wishlist = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wishlist</title>
      </Helmet>
      <BreadCrumb title="Wishlist" />

      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-3">
                  <div className='wishlist-card position-relative'>
                    <img src={cross} alt="cross" className="position-absolute cross img-fluid"/>
                    <div className="wishlist-card-image">
                      <img src={watch} className='img-fluid w-100' alt="watch" />
                    </div>
                    <div className="bg-white px-2 py-3">
                      <h5 className="title pb-2">Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                      <div className="product-detail d-flex justify-content-between pt-2">
                        <h5>Price:</h5>
                        <p>$ 100</p>
                      </div>
                    </div>
                   </div>
                </div>
                
                <div className="col-3">
                  <div className='wishlist-card position-relative'>
                    <img src={cross} alt="cross" className="position-absolute cross img-fluid"/>
                    <div className="wishlist-card-image">
                      <img src={watch} className='img-fluid w-100' alt="watch" />
                    </div>
                    <div className="bg-white px-2 py-3">
                      <h5 className="title pb-2">Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                      <div className="product-detail d-flex justify-content-between pt-2">
                        <h5>Price:</h5>
                        <p>$ 100</p>
                      </div>
                    </div>
                   </div>
                </div>

                <div className="col-3">
                  <div className='wishlist-card position-relative'>
                    <img src={cross} alt="cross" className="position-absolute cross img-fluid"/>
                    <div className="wishlist-card-image">
                      <img src={watch} className='img-fluid w-100' alt="watch" />
                    </div>
                    <div className="bg-white px-2 py-3">
                      <h5 className="title pb-2">Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                      <div className="product-detail d-flex justify-content-between pt-2">
                        <h5>Price:</h5>
                        <p>$ 100</p>
                      </div>
                    </div>
                   </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Wishlist;
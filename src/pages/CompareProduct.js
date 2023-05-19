import React from 'react';
import { Helmet } from 'react-helmet';
import BreadCrumb from '../components/BreadCrumb';
import watch from '../images/watch.jpg';
import cross from '../images/cross.svg';
import Color from '../components/Color';

const CompareProduct = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Compare Products</title>
      </Helmet>
      <BreadCrumb title="Compare Products" />

      <div className="compare-product-wrapper py-4 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img src={cross} alt="cross" className="position-absolute cross img-fluid"/>
                <div className="product-card-image">
                  <img src={watch} alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title pb-2">Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                  <div>
                    <div className="product-detail pt-2">
                      <h5>Price:</h5>
                      <p>$ 100</p>
                    </div>
                    <div className="product-detail pt-2">
                      <h5>Brand:</h5>
                      <p>Havels</p>
                    </div>
                    <div className="product-detail pt-2">
                      <h5>Type:</h5>
                      <p>Watch</p>
                    </div>
                    <div className="product-detail pt-2">
                      <h5>Availablity:</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail pt-2 mb-2">
                      <h5>Color:</h5>
                      <Color/>
                    </div>
                    <div className="product-detail pt-2">
                      <h5>Size:</h5>
                      <div className="d-flex gap-8">
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
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

export default CompareProduct;
import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

const Checkout = () => {
  return (
    <>
      <div className="checkout-wrapper py-5 home-wrapper-2">
        <div className="container-xl">
            <div className="row">
                <div className="col-7">
                    <nav style={{"--bs-breadcrumb-divider": ">"}} aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link className="text-dark total-price" to="/cart">Cart</Link></li>&nbsp; /
                        <li className="breadcrumb-item total-price active" aria-current="page">Information</li>&nbsp; /
                        <li className="breadcrumb-item total-price active" aria-current="page">Payment</li>
                      </ol>
                    </nav>

                    <h4 className="title total">Contact Information</h4>
                    <p className="user-details total">
                        Aman Kumar (satyam19arya@gmail.com)
                    </p>
                    <h4 className="mb-3">Shipping Address</h4>
                    <form action="" className="d-flex gap-13 flex-wrap justify-content-between">
                        <div className="w-100">
                          <select name="" className="form-control form-select" id="">
                            <option value="" selected disabled>Select Country</option>
                          </select>
                        </div>
                        <div className="flex-grow-1">
                          <input type="text" placeholder="First Name" className="form-control" />
                        </div>
                        <div className="flex-grow-1">
                          <input type="text" placeholder="Last Name" className="form-control" />
                        </div>
                        <div className="w-100">
                          <input type="text" placeholder="Address" className="form-control" />
                        </div>
                        <div className="w-100">
                          <input type="text" placeholder="Apartment, Suite ,etc" className="form-control" />
                        </div>
                        <div className="flex-grow-1">
                          <input type="text" placeholder="City" className="form-control" />
                        </div>
                        <div className="flex-grow-1">
                          <select name="" className="form-control form-select" id="">
                            <option value="" selected disabled>Select State</option>
                          </select>
                        </div>
                        <div className="flex-grow-1">
                          <input type="text" placeholder="Zipcode" className="form-control" />
                        </div>
                        <div className="w-100">
                          <div className="d-flex justify-content-between align-items-center">
                            <Link to="/cart" className="text-dark"><BiArrowBack className="me-2" />Return to Cart</Link>
                            <Link to="/cart" className="button">Continue to Shipping</Link>
                          </div>
                        </div>
                    </form>
                </div>

                <div className="col-5">
                    <div className="border-bottom py-4">

                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Checkout;
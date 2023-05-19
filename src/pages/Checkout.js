import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import watch from '../images/watch.jpg';

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
                        <li className="breadcrumb-item total-price active" aria-current="page">Shipping</li>&nbsp; /
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
                        <div className="d-flex gap-13 align-items-center">
                            <div className="w-70">
                               <img src={watch} alt="watch" className='img-fluid' />         
                            </div>
                            <div className='checkout-data'>
                                <h5>$ 500</h5>
                                <p>The IPL 2023 first match will be played at Narendra Modi Stadium, Ahmedabad between Gujarat Titans and Chennai Super Kings.</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-bottom py-3">
                       <div className="d-flex justify-content-between align-items-center">
                        <p>SubTotal</p>
                        <p>$ 1000</p>
                       </div>
                       <div className="d-flex justify-content-between align-items-center border-bottom">
                        <p>Shipping</p>
                        <p>$ 500</p>
                       </div>
                       <div className="d-flex justify-content-between align-items-center pt-4">
                        <p>Total</p>
                        <p>$ 1500</p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Checkout;
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';
import Compare from '../images/compare.svg';
import Wishlist from '../images/wishlist.svg';
import Login from '../images/user.svg';
import Cart from '../images/cart.svg';
import Menu from '../images/menu.svg';

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className='container-xxl'>
          <div className="row d-flex align-items-center">
            <div className="col-6">
              <p className='text-white mb-0'>Free Shipping Over $100 & Free Returns</p>
            </div>
            <div className="col-6">
              <p className='text-end text-white mb-0'>Contact: <a href="tel:+91 9452851038">+91 9452851038</a></p>
            </div>
          </div>
        </div>
      </header>  

      <header className="header-upper py-3">
        <div className='container-xxl'>
          <div className="row align-items-center">
            <div className="col-2 d-flex justify-content-center">
              <h2 className='header-name'><Link to="/" className="text-white">Amazon</Link></h2>
            </div>

            <div className="col-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2" 
                  placeholder="Search Product Here..." 
                  aria-label="Search Product Here..." 
                  aria-describedby="basic-addon2"/>
                <span className="input-group-text" id="basic-addon2">
                  <BsSearch className='fs-6'/>
                </span>
              </div>
            </div>

            <div className="col-4">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div className="header-icon">
                  <Link to="/compare-product" className="d-flex align-items-center gap-8 text-white">
                     <img src={Compare} alt="compare" />
                     <p className="mb-0">Compare</p>
                  </Link>
                </div>

                <div>
                  <Link to="/wishlist" className="d-flex align-items-center gap-8 text-white">
                     <img src={Wishlist} alt="wishlist" />
                     <p className="mb-0">Wishlist</p>
                  </Link>
                </div>

                <div>
                  <Link to="/login" className="d-flex align-items-center gap-8 text-white">
                     <img src={Login} alt="user" />
                     <p className="mb-0">Log in <br/></p>
                  </Link>
                </div>

                <div className='position-relative p-3'>
                  <Link to="/cart" className="d-flex align-items-center gap-8 text-white">
                    <img src={Cart} alt="cart" />
                    <div className="d-flex flex-column align-items-center position-absolute cart">
                      <span className="badge bg-white text-dark">0</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header> 

      <header className="header-bottom py-3">
        <div className='container-xxl'>
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle border-0 bg-transparent border-0 d-flex gap-8 align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src={Menu} alt="" /><span>Shop Categories</span>
                    </button>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/">Action</Link></li>
                      <li><Link className="dropdown-item" to="/">Another action</Link></li>
                      <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-30">
                    <NavLink to="/" className="text-white">Home</NavLink>
                    <NavLink to="/store" className="text-white">Our Store</NavLink>
                    <NavLink to="/blogs" className="text-white">Blogs</NavLink>
                    <NavLink to="/contact" className="text-white">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;
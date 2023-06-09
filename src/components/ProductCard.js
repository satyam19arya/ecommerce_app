import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import watch from '../images/watch.jpg';
import prodcompare from '../images/prodcompare.svg';
import view from '../images/view.svg';
import addcart from '../images/add-cart.svg';
import wish from '../images/wish.svg';
import watch1 from '../images/watch1.jpg';

const ProductCard = (props) => {
  let location = useLocation();

  return (
    <div className={`${location.pathname === "/store" ? `gr-${props.grid}` : "col-3"}`}>
      <Link to="/product/:id" className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <button className="border-0 bg-transparent">
            <img src={wish} alt="wishlist" />
          </button>
        </div>
        <div className="product-image">
          <img src={watch} className='img-fluid' alt="productImage" />
          <img src={watch1} className='img-fluid' alt="productImage" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">Kids headphone bulk 10 pack for students</h5>
          <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
          <p className={`description ${props.grid === 12 ? "d-block" : "d-none"}`}>A portable timepiece intended to be carried or worn by a person.</p>
          <p className="price">$100</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <button className="border-0 bg-transparent">
              <img src={prodcompare} alt="compare" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={view} alt="compare" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={addcart} alt="compare" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard;
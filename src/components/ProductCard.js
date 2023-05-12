import React from 'react';
import ReactStars from "react-rating-stars-component";
import watch from '../images/watch.jpg';
import { Link } from 'react-router-dom';
import prodcompare from '../images/prodcompare.svg';
import view from '../images/view.svg';
import addcart from '../images/add-cart.svg';
import wish from '../images/wish.svg';
import watch1 from '../images/watch1.jpg';

const ProductCard = () => {
  return (
    <div className="col-3">
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src={wish} alt="wishlist" />
          </Link>
        </div>
        <div className="product-image">
          <img src={watch} className='img-fluid' alt="productImage" />
          <img src={watch1} className='img-fluid' alt="productImage" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">Kids headphone bulk 10 pack for students</h5>
          <ReactStars count={5} size={24} value='3' edit={false} activeColor="#ffd700" />
          <p className="price">$100</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src={prodcompare} alt="compare" />
            </Link>
            <Link>
              <img src={view} alt="compare" />
            </Link>
            <Link>
              <img src={addcart} alt="compare" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard;
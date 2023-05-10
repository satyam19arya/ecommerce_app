import React from 'react';
import ReactStars from "react-rating-stars-component";
import watch from '../images/watch.jpg';

const ProductCard = () => {
  return (
    <div className="col-3">
      <div className="product-card">
        <div className="product-image">
          <img src={watch} alt="productImage" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">Kids headphone bulk 10 pack for students</h5>
          <ReactStars count={5} size={24} value='3' activeColor="#ffd700" />
          <p className="price">$100</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;
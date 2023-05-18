import React, {useState} from 'react';
import { Helmet } from 'react-helmet';
import BreadCrumb from '../components/BreadCrumb';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';

const SingleProduct = () => {
    const [orderedProduct, setOrderedProduct] = useState(true);
    console.log(setOrderedProduct);
    const props = {width: 580, height: 350, zoomWidth: 500, img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"};

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Product Name</title>
      </Helmet>
      <BreadCrumb title="Product Name" />

      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-13">
                <div>
                  <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className="img-fluid" alt="" />
                </div>
                <div>
                  <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className="img-fluid" alt="" />
                </div>
                <div>
                  <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className="img-fluid" alt="" />
                </div>
                <div>
                  <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className="img-fluid" alt="" />
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">
                    Kids Headphones Bulk 10 Pack Multi Colored For Students
                  </h3>
                </div>
                <div className="border-bottom py-2">
                  <p className="price">$ 100</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars count={5} size={24} value='3' edit={false} activeColor="#ffd700" />
                    <p className="mb-0">( 2 Reviews )</p>
                  </div>
                  <a className="review-btn" href="#review">Write a Review</a>
                </div>

                <div className="border-bottom py-2">
                  <div className="d-flex align-items-center gap-8">
                    <h3 className="product-heading"></h3>
                    <p className="product-data"></p>
                  </div>
                  <div className="d-flex align-items-center gap-8">
                    <h3 className="product-heading"></h3>
                    <p className="product-data"></p>
                  </div>
                  <div className="d-flex align-items-center gap-8">
                    <h3 className="product-heading"></h3>
                    <p className="product-data"></p>
                  </div>
                  <div className="d-flex align-items-center gap-8">
                    <h3 className="product-heading"></h3>
                    <p className="product-data"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="description-wrapper py-3 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                  <div className='bg-white p-3'>
                    <h4>Description</h4>
                    <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </div>
            </div>
        </div>
      </div>

      <section className="review-wrapper py-5 home-wrapper-2">
        <div className="container-xl">
            <div className="row">
                <div className="col-12">
                    <div className='review-head d-flex justify-content-between align-items-end'>
                      <div id="review">
                        <h4 className='mb-2'>Customer Reviews</h4>
                        <div className='d-flex align-items-center gap-8'>
                            <ReactStars count={5} size={24} value='3' edit={false} activeColor="#ffd700" />
                            <p className='mb-0 description'>Based on 2 reviews</p>
                        </div>
                      </div>
                      {orderedProduct && (
                        <div>
                          <a href='/'>Write a review</a>
                        </div>
                      )}
                    </div>

                    <div className='review-form mt-5'>
                    <form>
                        <input type="text" name='name' placeholder='Enter your name' required />
                        <input type="email" name='email' placeholder='Enter your email' required />
                        <div className='d-flex gap-13 align-items-center'>
                          <p className='rating'>Rating</p>
                          <ReactStars count={5} size={24} value='0' edit={true} activeColor="#ffd700" />
                        </div>
                        <input type="text" name='title' placeholder='Title' required />
                        <textarea name="message" rows="7" placeholder="Write your comment here" required></textarea>
                        <div className='d-flex justify-content-end'>
                          <button type='submit' className='button border-0'>Submit</button>
                        </div>
                    </form>
                    </div>

                    <div className='reviews'>
                      <div className='review'>
                        <ReactStars count={5} size={24} value='3' edit={false} activeColor="#ffd700" />
                        <p>Well product</p>
                      </div>

                      <div className='review'>
                        <ReactStars count={5} size={24} value='4' edit={false} activeColor="#ffd700" />
                        <p>Good quality and well maintained</p>
                      </div>

                      <div className='review'>
                        <ReactStars count={5} size={24} value='4' edit={false} activeColor="#ffd700" />
                        <p>Easy to install and easy for customers to use. I like the customizable feature that this app gives your reviews, and can match your theme and color scheme!</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Popular Products</h3>
            </div>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>
      </section>
    </>
  )
}

export default SingleProduct;
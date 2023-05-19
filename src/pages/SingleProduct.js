import React, {useState} from 'react';
import { Helmet } from 'react-helmet';
import BreadCrumb from '../components/BreadCrumb';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import {TbGitCompare} from 'react-icons/tb';
import {AiOutlineHeart} from 'react-icons/ai';

const SingleProduct = () => {
    const [orderedProduct, setOrderedProduct] = useState(true);
    console.log(setOrderedProduct);
    const props = {width: 680, height: 350, zoomWidth: 500, img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"};

    const copyToClipboard = (text) => {
      var textField = document.createElement("textarea");
      textField.innerText = text;
      document.body.appendChild(textField);
      textField.select();
      document.execCommand("copy");
      textField.remove();
    };

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

                <div className="py-2">
                  <div className="d-flex align-items-center gap-8 my-3">
                    <h3 className="product-heading">Type :</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex align-items-center gap-8 my-3">
                    <h3 className="product-heading">Brand :</h3>
                    <p className="product-data">Sonata</p>
                  </div>
                  <div className="d-flex align-items-center gap-8 my-3">
                    <h3 className="product-heading">Category :</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex align-items-center gap-8 my-3">
                    <h3 className="product-heading">Tags :</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex align-items-center gap-8 my-3">
                    <h3 className="product-heading">Availability :</h3>
                    <p className="product-data">In Stock</p>
                  </div>
                  <div className="d-flex align-items-center gap-8 my-3">
                    <h3 className="product-heading">Size :</h3>
                    <div className="d-flex flex-wrap gap-13">
                      <span className='badge border border-1 text-dark border-secondary'>S</span>
                      <span className='badge border border-1 text-dark border-secondary'>M</span>
                      <span className='badge border border-1 text-dark border-secondary'>XL</span>
                      <span className='badge border border-1 text-dark border-secondary'>XXL</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-8 my-3">
                    <h3 className="product-heading">Color :</h3>
                    <Color/>
                  </div>
                  <div className="d-flex align-items-center gap-8 my-3">
                    <h3 className="product-heading">Quantity :</h3>
                    <div>
                      <input type="number" name="" min={1} max={10} className='form-control' style={{width: "70px"}} placeholder='0' id=""/>
                    </div>
                    <div className="d-flex justify-content-center gap-13 align-items-center">
                      <button className='login-button border-0'>Add to Cart</button>
                      <button to='/signup' className='button signup border-0'>Buy Now</button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-13">
                    <div>
                      <a href="/" className='compare'><TbGitCompare/> Add to Compare</a>
                    </div>
                    <div>
                      <a href="/" className='wishlist'><AiOutlineHeart/> Add to Wishlist</a>
                    </div>
                  </div>
                  <div className='py-3'>
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Shipping and Returns
                          </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            Free shipping and returns available on all orders! <br /> We ship all US domestic orders within <b>5-10 business days!</b>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Material
                          </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Dimensions
                          </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Care Instructions
                          </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex gap-8 align-items-center">
                    <h3 className="product-heading">Product Link:</h3>
                    <h5 className="product-link" onClick={() => {copyToClipboard("https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg")}}>Copy Product Link</h5>
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
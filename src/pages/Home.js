import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import SpecialProduct from '../components/SpecialProduct';
import { Helmet } from "react-helmet";
import { services } from "../utils/Data";

import Mainbanner from '../images/main-banner-1.jpg';
import catbanner1 from '../images/catbanner-01.jpg';
import catbanner2 from '../images/catbanner-02.jpg';
import catbanner3 from '../images/catbanner-03.jpg';
import catbanner4 from '../images/catbanner-04.jpg';
// import service1 from '../images/service-01.png';
// import service2 from '../images/service-02.png';
// import service3 from '../images/service-03.png';
// import service5 from '../images/service-05.png';
import camera from '../images/camera.jpg';
import tv from '../images/tv.jpg';
import headphone from '../images/headphone.jpg';
import brand1 from '../images/brand-01.png';
import brand2 from '../images/brand-02.png';
import brand3 from '../images/brand-03.png';
import brand4 from '../images/brand-04.png';
import brand5 from '../images/brand-05.png';
import brand6 from '../images/brand-06.png';
import brand7 from '../images/brand-07.png';
import brand8 from '../images/brand-08.png';
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import famous1 from '../images/famous-1.webp';
import famous2 from '../images/famous-2.webp';
import famous3 from '../images/famous-3.webp';
import famous4 from '../images/famous-4.webp';


const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>

      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img src={Mainbanner} className="img-fluid rounded-3" alt="main banner" />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>iPad S13+ Pro</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link className='button'>Buy Now</Link>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="d-flex flex-wrap gap-8 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img src={catbanner1} className="img-fluid rounded-3" alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>BEST SALE</h4>
                    <h5>iPad S13+ Pro</h5>
                    <p>From $999.00 <br/> or $41.62/mo.</p>                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img src={catbanner2} className="img-fluid rounded-3" alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>iPad S13+ Pro</h5>
                    <p>From $999.00 <br/> or $41.62/mo.</p>                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img src={catbanner3} className="img-fluid rounded-3" alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>iPad S13+ Pro</h5>
                    <p>From $999.00 <br/> or $41.62/mo.</p>                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img src={catbanner4} className="img-fluid rounded-3" alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED</h4>
                    <h5>iPad S13+ Pro</h5>
                    <p>From $999.00 <br/> or $41.62/mo.</p>                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                {services?.map ((i,j) => {
                  return (
                    <div className="d-flex align-items-center gap-13" key={j}>
                      <img src={i.image} alt="services" />
                      <div>
                        <h6>{i.title}</h6>
                        <p className="mb-0">{i.tagline}</p>
                      </div>
                    </div>
                  )
                })}
                {/* <div className="d-flex align-items-center gap-13">
                  <img src={service1} alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders over $5</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-13">
                  <img src={service2} alt="services" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save upto 25% off</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-13">
                  <img src={service3} alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-13">
                  <img src={service5} alt="services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payment</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-3 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h4>Cameras</h4>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="camera"/>
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h4>TV</h4>
                    <p>10 Items</p>
                  </div>
                  <img src={tv} alt="camera"/>
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h4>Watches</h4>
                    <p>10 Items</p>
                  </div>
                  <img src={headphone} alt="camera"/>
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h4>Cameras</h4>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="camera"/>
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h4>Cameras</h4>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="camera"/>
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h4>TV</h4>
                    <p>10 Items</p>
                  </div>
                  <img src={tv} alt="camera"/>
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h4>Watches</h4>
                    <p>10 Items</p>
                  </div>
                  <img src={headphone} alt="camera"/>
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h4>Cameras</h4>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="camera"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marque-wrapper-4 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper bg-white card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src={brand1} alt="brand" />
                </div>

                <div className="mx-4 w-25">
                  <img src={brand2} alt="brand" />
                </div>

                <div className="mx-4 w-25">
                  <img src={brand3} alt="brand" />
                </div>

                <div className="mx-4 w-25">
                  <img src={brand4} alt="brand" />
                </div>

                <div className="mx-4 w-25">
                  <img src={brand5} alt="brand" />
                </div>

                <div className="mx-4 w-25">
                  <img src={brand6} alt="brand" />
                </div>

                <div className="mx-4 w-25">
                  <img src={brand7} alt="brand" />
                </div>

                <div className="mx-4 w-25">
                  <img src={brand8} alt="brand" />
                </div>
              </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Feature Collection</h3>
            </div>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>
      </section>

      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src={famous1} className="img-fluid" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399or $16.62/mo. for 24 mo.*</p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="famous-card position-relative">
                <img src={famous2} className="img-fluid" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Big Screen</h5>
                  <h6 className="text-dark">Smart Watch Series 7</h6>
                  <p className="text-dark">From $399or $16.62/mo. for 24 mo.*</p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="famous-card position-relative">
                <img src={famous3} className="img-fluid" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Big Screen</h5>
                  <h6 className="text-dark">Smart Watch Series 7</h6>
                  <p className="text-dark">From $399or $16.62/mo. for 24 mo.*</p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="famous-card position-relative">
                <img src={famous4} className="img-fluid" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className='text-dark'>Big Screen</h5>
                  <h6 className='text-dark'>Smart Watch Series 7</h6>
                  <p className='text-dark'>From $399or $16.62/mo. for 24 mo.*</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
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

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;
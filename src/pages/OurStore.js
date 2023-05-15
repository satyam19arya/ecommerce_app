import React, {useState} from 'react'
import BreadCrumb from '../components/BreadCrumb';
import {Helmet} from "react-helmet";
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';
import watch from '../images/watch.jpg';
import gr4 from '../images/gr4.svg';
import gr3 from '../images/gr3.svg';
import gr2 from '../images/gr2.svg';
import gr from '../images/gr.svg';

const OurStore = () => {
  const [grid, setGrid] = useState(4);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Store</title>
      </Helmet>
      <BreadCrumb title="Our Store"/>

      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop by Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By:</h3>
                <div>
                  <h5 className='sub-title'>Availability</h5>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id=""/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      In Stock [1]
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id=""/>
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                      Out of Stock [0]
                    </label>
                  </div>
                  <h5 className='sub-title'>Price</h5>
                  <div className='d-flex align-items-center gap-8'>
                    <div className="form-floating mb-3">
                      <input type="email" className="form-control" id="floatingInput" placeholder="From"/>
                      <label htmlFor="floatingInput">$ From</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="email" className="form-control" id="floatingInput" placeholder="To"/>
                      <label htmlFor="floatingInput">$ To</label>
                    </div>
                  </div>
                  <h5 className='sub-title'>Colors</h5>
                  <div>
                    <ul className="colors ps-0">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <h5 className='sub-title'>Size</h5>
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="color1"/>
                      <label className="form-check-label" htmlFor="flexCheckChecked">
                        S [0]
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="color2"/>
                      <label className="form-check-label" htmlFor="flexCheckChecked">
                        M [0]
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="color3"/>
                      <label className="form-check-label" htmlFor="flexCheckChecked">
                        L [0]
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="color4"/>
                      <label className="form-check-label" htmlFor="flexCheckChecked">
                        XL [0]
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className='product-tags d-flex flex-wrap align-items-center gap-8'>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Watch</span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Headphones</span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Chair</span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Laptop</span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Shirt</span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Clock</span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Table</span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Band</span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Products</h3>
                <div>
                  <div className="random-products d-flex align-items-center">
                    <div className="w-50">
                      <img src={watch} alt="watch" className='img-fluid'/>
                    </div>
                    <div className='w-50'>
                      <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                      <ReactStars count={5} size={24} value='3' edit={false} activeColor="#ffd700" />
                      <b>$ 300</b>
                    </div>
                  </div>

                  <div className="random-products d-flex align-items-center">
                    <div className="w-50">
                      <img src={watch} alt="watch" className='img-fluid'/>
                    </div>
                    <div className='w-50'>
                      <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                      <ReactStars count={5} size={24} value='3' edit={false} activeColor="#ffd700" />
                      <b>$ 300</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-8">
                    <p className="mb-0 d-block" style={{ width: "100px" }}>Sort By:</p>
                    <select name="" defaultValue={"manual"} className="form-control form-select" id="">
                      <option value="manual">Featured</option>
                      <option value="best-selling">Best selling</option>
                      <option value="title-ascending">Alphabetically, A-Z</option>
                      <option value="title-descending">Alphabetically, Z-A</option>
                      <option value="price-ascending">Price, low to high</option>
                      <option value="price-descending">Price, high to low</option>
                      <option value="created-ascending">Date, old to new</option>
                      <option value="created-descending">Date, new to old</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-8">
                    <p className="totalproducts mb-0">21 Products</p>
                    <div className="d-flex gap-8 align-items-center grid">
                      <img src={gr4} onClick={() => {setGrid(3)}} className="d-block img-fluid" alt="grid" />
                      <img src={gr3} onClick={() => {setGrid(4)}} className="d-block img-fluid" alt="grid" />
                      <img src={gr2} onClick={() => {setGrid(6)}} className="d-block img-fluid" alt="grid" />
                      <img src={gr} onClick={() => {setGrid(12)}} className="d-block img-fluid" alt="grid" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="products-list pb-5 d-flex gap-13 flex-wrap">
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurStore;
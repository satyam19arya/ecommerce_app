import React from 'react';
import { Helmet } from 'react-helmet';
import BreadCrumb from '../components/BreadCrumb';
import blog1 from '../images/blog-1.jpg';
import { Link } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';

const SingleBlog = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dynamic</title>
      </Helmet>
      <BreadCrumb title="Dynamic" />

      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
                <div className="single-blog-card">
                    <Link className='d-flex align-items-center gap-8' to="/blogs"><HiArrowNarrowLeft/>Go back</Link>
                    <h3 className="title">A Beautiful Sunday Morning Sunset</h3>
                    <img src={blog1} className="img-fluid w-50 my-2" alt="blog" />
                    <p>lorem ipsum dolor sit am lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleBlog;
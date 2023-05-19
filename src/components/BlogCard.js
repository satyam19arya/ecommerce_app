import React from 'react';
import blog1 from '../images/blog-1.jpg';
import { Link } from 'react-router-dom';

const BlogCard = () => {
  return (
    <div className="col-3">
        <div className="blog-card mb-3">
            <div className="card-image">
                <img src={blog1} className="img-fluid" alt="blog" />
            </div>
            <div className="blog-content">
                <p className="date">19 Nov. 2002</p>
                <h5 className="title">A beautiful Sunday morning</h5>
                <p className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum
                </p>
                <Link to="/blog/:id" className="button">Read more</Link>
            </div>
        </div>
    </div>
  )
}

export default BlogCard;
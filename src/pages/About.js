import React from 'react';
import { Helmet } from 'react-helmet';
import BreadCrumb from '../components/BreadCrumb';

const About = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
      </Helmet>
      <BreadCrumb title="About" />
    </>
  )
}

export default About;
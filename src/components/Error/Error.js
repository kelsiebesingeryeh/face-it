import React from 'react';
import error-img from './error-img.jpg';
import './Error.css';

const Error = () => {
  return (
    <section className='error-message'>
      <img src={error-img} alt='broken blush dics' />
      <h2>We're having technical difficulties.</h2>
      <h3>Please refresh or revisit at a later time. Thank you.</h3>
    </section>
  )
}

export default Error;

import React from 'react';
import './Loading.css';
import LoadingImg from './LoadingImg.svg';

const LoadingMessage = () => {
    return (
        <section className='loading-message'>
            <h2 className='loading-text'>Gathering...</h2>
            <img src={LoadingImg}></img>
        </section>
    )
}

export default LoadingMessage;
import React from 'react';
import './Loading.css';
import LoadingImg from '../LoadingImg/LoadingImg';

const LoadingMessage = () => {
    return (
        <section className='loading-message'>
            <h2 className='loading-text'>Gathering...</h2>
            <LoadingImg />
        </section>
    )
}

export default LoadingMessage;
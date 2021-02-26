import React from 'react';
import './Loading.css';
import LoadingImg from './LoadingImg.svg';

//render when fetching components
//add/ hide component in componentDidMount?
//is LoadingImg best practice or should I build a component for the svg like i did for the logo?

const LoadingMessage = () => {
    return (
        <section className='loading-message'>
            <h2 className='loading-text'>Gathering...</h2>
            <img src={LoadingImg}></img>
        </section>
    )
}

export default LoadingMessage;
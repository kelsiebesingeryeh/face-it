import React from 'react';

const Type = ({image, title}) => {
    return (
      <article className="productType">
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </article>
    );
}

export default Type;


// Types of products to display
/* // blush
// bronzer
// eyebrow
// eyeliner
// eyeshadow
// foundation
// lip liner 
// lipstick
// mascara: https://images.unsplash.com/photo-1512207128881-1baee87126fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=899&q=80
// nail polish */

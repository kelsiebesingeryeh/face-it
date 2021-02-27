import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Type from '../Type/Type';
import './Category.css';

const Eco = ({eco}) => {
    //problem: upon refresh, data does not persist
    //(1) localStorage? History? Cache? sessionStorage?
    //(2) useEffect? 
    const [productType, setProductType] = useState(eco);

    const filterMakeupTypes = eco.map((item) => item["product_type"]);
    const productTypes = filterMakeupTypes.filter(
      (item, index) => filterMakeupTypes.indexOf(item) === index
    );

    const assignUrl = (item) => {
      if(item === 'mascara') {
        return 'https://images.unsplash.com/photo-1512207128881-1baee87126fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=899&q=80'
      } else if(item === 'blush') {
        return ' https://images.unsplash.com/photo-1515688594390-b649af70d282?ixlib=rb-1.2.1&ixid=MXwxM[…]by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1295&q=80';
      } else if(item === 'bronzer') {
        return 'https://images.unsplash.com/photo-1611781409837-a7c20eb1a298?ixid=MXwxMjA3fDB8MHxwaG90[…]ufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
      } else if(item === 'eyebrow') {
        return 'https://images.unsplash.com/photo-1597225335960-8a9970732de1?ixid=MXwxMjA3fDB8MHxzZWFy[…]58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60';
      } else if(item === 'eyeliner') {
        return 'https://images.unsplash.com/photo-1597225281099-88c45ee7fc2b?ixid=MXwxMjA3fDB8MHxzZWFy[…]58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60';
      } else if(item === 'eyeshadow') {
        return 'https://images.unsplash.com/photo-1583241801142-113b9f5bbde5?ixid=MXwxMjA3fDB8MHxwaG90[…]ufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
      } else if(item === 'foundation') {
        return 'https://images.unsplash.com/photo-1590156546946-ce55a12a6a5d?ixid=MXwxMjA3fDB8MHxzZWFy[…]fHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60';
      } else if(item === 'lip_liner') {
        return 'https://images.unsplash.com/photo-1597225312380-7b74ec8f4d74?ixid=MXwxMjA3fDB8MHxzZWFy[…]58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60';
      } else if(item === 'lipstick') {
        return 'https://images.unsplash.com/photo-1591360236480-4ed861025fa1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80';
      } else if(item === 'nail_polish') {
        return 'https://images.unsplash.com/photo-1506668635606-caa9ef5ce079?ixid=MXwxMjA3fDB8MHxwaG90[…]ufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
      }
    }

    const productsOnDisplay = productTypes.map((item) => {
      const url = assignUrl(item)
      return <Type 
      title={item} 
      key={item} 
      img={url} 
      category={"eco"} />;
    });

    if (productsOnDisplay.length) {
      return (
        <div className="productContainer">
        {productsOnDisplay}
        </div>
      )
    } else if (!productsOnDisplay.length) {
      console.log('does eco props exists upon refresh', eco);
      return <Redirect to='/error' />
    }
}

export default Eco;

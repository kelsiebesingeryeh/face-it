import React from 'react';
import { Redirect } from 'react-router-dom';
import Type from '../Type/Type';
import './Category.css';
import PropTypes from 'prop-types';

const Vegan = ({ vegan }) => {
    const filterMakeupTypes = vegan.map((item) => item['product_type']);
    const productTypes = filterMakeupTypes.filter((item, index) => filterMakeupTypes.indexOf(item) === index);

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
    };

    const productsOnDisplay = productTypes.map((item) => {
      const url = assignUrl(item)
      return <Type
                title={item}
                key={item}
                img={url}
                id={item}
                category={'vegan'}
              />;
    });


    if (productsOnDisplay.length) {
      return (
        <section className='category'>
          <h2 className='categoryTitle'>Vegan</h2>
          <div className='descriptionContainer'>
            <h3 className='definitionHeading'>What is Vegan?</h3>
              <p className='categoryDefinition'>
                Products that are free of animal ingredients.
              </p>
            <h3 className='descriptionHeading'>Why choose Vegan?</h3>
              <p className='categoryDescription'>
              Many products contain animal products that include dairy, honey, or beeswax, as you might expect.  It is also common for beauty products to include urine, ground hooves, insects, sheep wool, and other by-products one normally wouldn’t think of when purchasing their beauty products.
              <br></br>
              A vegan diet favors plant-based food, so naturally, vegan products are more likely to contain natural, plant-based ingredients. Vegan packaging also tends to be more environmentally-friendly, as these products are usually geared towards those who value healthy and conscious living.
              </p>
          </div>
          <div className='productContainer'>
            {productsOnDisplay}
          </div>
          <div className='sourcesContainer'>
            <h3 className='sourcesTitle'>Sources</h3>
              <div className='linkContainer'>
                <a href='https://www.nytimes.com/2019/02/26/style/why-you-should-care-about-vegan-beauty.html' target='_blank' rel='noreferrer'>New York Times</a>
                <a href='https://www.piperberry.com/blogs/clean-beauty-blog/9-excellent-reasons-to-start-using-vegan-beauty-products' target='_blank' rel='noreferrer'>Piperberry</a>
                <a href='https://www.cosmopolitan.com/uk/beauty-hair/makeup/a45915/vegan-makeup/' target='_blank' rel='noreferrer'>Cosmopolitan Magazine</a>
              </div>
          </div>
        </section>
      )
    } else {
      return <Redirect to='/error' />
    }
};



export default Vegan;

Vegan.propTypes = {
  vegan: PropTypes.array,
};

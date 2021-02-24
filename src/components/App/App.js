import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom';
import './App.css';
import Category from '../Category/Category';
import Nav from '../Nav/Nav';

class App extends Component {
  constructor(){
    super();
    this.state = {
      makeup: [],
      vegan: [],
      fairTrade: [],
      eco: []
    }
  }

  componentDidMount(){
    fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
      .then(response => response.json())
      .then(response => {
        console.log(response)
      })
      .catch(err => console.log('error'))
  }

  sortByCategory = response => {
    console.log(response)
    const vegan = response.filter(item => item.tag_list.includes('vegan'));
    const fairTrade = response.filter(item => item.tag_list.includes('fair trade'));

    this.setState({ vegan: vegan })
    this.setState({ fairTrade: fairTrade })
    //eco -> which tags do we want to include for this?
  }

  // what's data type are we getting from the api call? -> array of objects with property tags (array of strings) which we want to filter through to create category arrays.

  // in the API call, is that where we want the logic of separating categories to occur?
  // componentDidMount, API calls and category array assignments
  // does it need to be in the api call?
  // this.state.makeup is then split

  render() {
    return (
      <main>
        <Nav />
      <Route exact path='/' render={() => {
        return (
          <div className="App">
            <h1>FaceIt</h1>
            <h2>Mission Statement: This is our mission statement.</h2>
            <section className="category-container">
              <Link to="eco">
                <article className="mainCategory">
                  <img
                    className="mainCategoryImage"
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1748&q=80"
                    alt="forest"
                  ></img>
                </article>
              </Link>
              <Link to="fairTrade">
                <article className="mainCategory">
                  <img
                    className="mainCategoryImage"
                    src="https://images.unsplash.com/photo-1591130219388-ae3d1c17431b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=633&q=80"
                    alt="world-map"
                  ></img>
                </article>
              </Link>
              <Link to="vegan">
                <article className="mainCategory">
                  <img
                    className="mainCategoryImage"
                    src="https://images.unsplash.com/photo-1509298271096-c979b9203fd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1212&q=80"
                    alt="veggie-heart"
                  ></img>
                </article>
              </Link>
            </section>
          </div>
        );
        }}
        />

          <Route
            exact
            path='/:category'
            render={({ match }) => {
              let categoryType

              if (match.params.category === 'vegan') {
                categoryType = this.state.vegan;
              } else if (match.params.category === 'fairTrade') {
                categoryType = this.state.fairTrade;
              } else if (match.params.category === 'eco') {
                categoryType = this.state.eco;
              }

              return <Category data={categoryType} />
            }}
          />
    </main>
    );
  }
}

export default App;

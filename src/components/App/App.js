import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom';
import './App.css';
import Category from '../Category/Category';

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
      .then(response => this.sortByCategory(response))
      .catch(err => console.log('error'))
  }

  sortByCategory = response => {
    const vegan = response.filter(item => item.tags.includes('vegan'));
    const fairTrade = response.filter(item => item.tags.includes('fair trade'));

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
      <Route exact path='/' render={() => {
        return (
          <div className="App">
            <h1>FaceIt</h1>
            <section className="category-container">
              <Link to="eco">
                <h2>Eco-Friendly</h2>
              </Link>
              <Link to="fairTrade">
                <h2>FairTrade</h2>
              </Link>
              <Link to="vegan">
                <h2>Vegan</h2>
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

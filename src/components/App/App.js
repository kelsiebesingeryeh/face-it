import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom';
import './App.css';
import Eco from '../Category/Eco';
import Vegan from '../Category/Vegan';
import AllergenFriendly from '../Category/AllergenFriendly';
import Nav from '../Nav/Nav';
import Logo from '../Logo/Logo';

class App extends Component {
  constructor(){
    super();
    this.state = {
      makeup: [],
      vegan: [],
      allergenFriendly: [],
      eco: []
    }
  }

  componentDidMount(){
    fetch("http://localhost:3001/api/v1/makeup")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          makeup: data,
        });
        this.sortByCategory(this.state.makeup);
      })
      .catch((err) => console.log("error"));
  }

  
  sortByCategory = response => {
    const vegan = response.filter(item => item["tag_list"].includes('Vegan'));
    const eco = response.filter(
      (item) =>
        item["tag_list"].includes("EWG Verified") ||
        item["tag_list"].includes("purpicks") ||
        item["tag_list"].includes("CertClean") ||
        item["tag_list"].includes("EcoCert") ||
        item["tag_list"].includes("USDA Organic") ||
        item["tag_list"].includes("Non-GMO") ||
        item["tag_list"].includes("Organic")
    );
    const allergenFriendly = response.filter(
      (item) =>
        item["tag_list"].includes("Dairy Free") ||
        item["tag_list"].includes("Gluten Free") ||
        item["tag_list"].includes("Hypoallergenic") ||
        item["tag_list"].includes("Peanut Free Product") ||
        item["tag_list"].includes("alcohol free") ||
        item["tag_list"].includes("silicone free")
    )

    this.setState({ vegan: vegan })
    this.setState({ eco: eco })
    this.setState({ allergenFriendly: allergenFriendly });
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
            <div className="title-container">
              <h1>FaceIt</h1>
              <Logo />
              <h2 class="mission-statement">Discover beauty products that compliment our lifestyles.</h2>
            </div>
            <section className="category-container">
              <Link to="eco">
                <article 
                  className="mainCategory" 
                  style={{backgroundImage: `url(${"https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1748&q=80"})`}}>
                  <h3 className="mainCategoryText">Eco</h3>
                </article>
              </Link>
              <Link to="allergenFriendly">
                <article 
                  className="mainCategory" 
                  style={{backgroundImage: `url(${"https://images.unsplash.com/photo-1591130219388-ae3d1c17431b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=633&q=80"})`}}>
                  <h3 className="mainCategoryText">Fair Trade</h3>
                </article>
              </Link>
              <Link to="vegan">
                <article 
                  className="mainCategory" 
                  style={{backgroundImage: `url(${"https://images.unsplash.com/photo-1509298271096-c979b9203fd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1212&q=80"})`}}>
                  <h3 className="mainCategoryText">Vegan</h3>
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

              if (match.params.category === 'vegan') {
                return <Vegan vegan={this.state.vegan}/>
              } else if (match.params.category === 'allergenFriendly') {
                return <AllergenFriendly allergenFriendly={this.state.allergenFriendly}/>
              } else if (match.params.category === 'eco') {
                return <Eco eco={this.state.eco}/>
              }
            }}
          />
    </main>
    );
  }
}

export default App;

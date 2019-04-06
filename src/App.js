import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
    state = {
        restaurant: []
    }
  componentDidMount(){
    const apiKey = 'mVkI8cJKHAw2u_3H9vqxhfB4JhECH--tFRQwzTsnQQLYBCE4fL5T3DOwestN0YkJanJH-NWvQXxmGzbbnqC3dqc-TmxWBrNSgqPHzKUlOfurk00IxzhgNcZ3IlimXHYx'
      const API = `${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=vancouver`;
      fetch(API, { method: 'get', Header: {
          Authorization: 'Bearer' + apiKey}}).then(res => {
          const restaurant = res.businesses;
          this.setState({restaurant : restaurant});
          console.log(restaurant);
      })
  }
  render() {
      // let data = this.state.restaurant.map(function(item, i){
      //     console.log('test');
      //     return (<div>
      //         <img src="{item.image_url}" alt=""/>
      //         <h1 key={i}>item.name</h1>
      //         <h2>{item.is_closed}</h2>
      //         <h2>{item.priced}</h2>
      //         <h2>{item.review_count}</h2>
      //         <h2>{item.rating}</h2>
      //         <h2>{item.location.address1}+{item.location.city}+{item.location.state}+{item.location.zip_code}</h2>
      //         <h2>{item.phone}</h2>
      //         <h2>{item.url}</h2>
      //
      //     </div>)
      // })
    return (
      <div className="App">
        <form>
            <label htmlFor="">Search Term</label>
            <input type="text"/>
            <label htmlFor="">Categories</label>
            <input type="text"/>
            <label htmlFor="">City/Location</label>
            <input type="text"/>
            <label htmlFor="">Sort By</label>
            <select name="" id=""></select>
            <label htmlFor="">Open At</label>
            <input type="text"/>
            <input type="checkbox" placeholder={"Open Now"}/>
            <input type="submit" placeholder={"Submit"}/>
        </form>

          {/*{data}*/}
      </div>
    );
  }
}

export default App;

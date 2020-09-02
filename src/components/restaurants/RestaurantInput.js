import React, { Component } from 'react';

class RestaurantInput extends Component {
  
   constructor(props) {
    super(props);
    
    this.state = {
      text: ''
    };
  };
  
  render() {
    return (
      <div>
        Restaurant Input
      </div>
    );
  }
};

export default RestaurantInput;

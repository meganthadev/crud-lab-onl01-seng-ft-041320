import React, { Component } from 'react';

class RestaurantInput extends Component {
  
   constructor(props) {
    super(props);
    
    this.state = {
      text: ''
    };
  };
  
  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    });
  }
  
  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    });
  }
  
  render() {
    return (
     <div>
     <form onSubmit={(event) => this.handleOnSubmit(event)}>
      
        Restaurant Input
      </div>
    );
  }
};

export default RestaurantInput;

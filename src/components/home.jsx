import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="shopping-list container">
        <h1>Shopping {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

export default Home;

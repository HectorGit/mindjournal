import React, { Component } from 'react';

class NavigationItem extends Component {
  render() {
    return (
		<a className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" href="/">{this.props.navigation_item_title}</a>	   
    );
  }
}

export default NavigationItem;

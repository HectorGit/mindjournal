import React, { Component } from 'react';
import NavigationItem from './NavigationItem'

class Navigation extends Component {
  render() {
    return (
    	<div>

        <p className = "tc f4 mw7 center mt4 ">Your Mental Health Journal</p>


        <nav className ="bt bb tc mw7 center mt4">
          <NavigationItem navigation_item_title ='Home'/>
          <NavigationItem navigation_item_title = 'Sign in'/>
          <NavigationItem navigation_item_title = 'Register'/>
        </nav>
	    </div>
    );
  }
}

export default Navigation;

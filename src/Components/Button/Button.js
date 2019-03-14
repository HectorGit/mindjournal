import React, { Component } from 'react';

/*https://tachyons.io/components/cards/text-card/index.html*/

class Button extends Component {
  render() {
    return (
    	<div>
	   

			{/*http://tachyons.io/components/buttons/basic-previous-next/index.html*/}
			<a href="#0" class="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box">
			    <span class="pr1">{this.props.button_name}</span>
			    <svg class="w1" data-icon="chevronRight" viewBox="0 0 32 32" >
			       <title>chevronRight icon</title>
			       <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>
			    </svg>
			</a>


        </div>
    );
  }
}

export default Button;
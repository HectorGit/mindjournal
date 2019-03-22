import React, { Component } from 'react';

/*https://tachyons.io/components/cards/text-card/index.html*/

class Button extends Component {
  render() {
    return (
    	<div>
	   

			{/*http://tachyons.io/components/buttons/basic-previous-next/index.html*/}
			<a href="#0" className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box">
			    <span className="pr1">{this.props.button_name}</span>
			    <svg className="w1" data-icon={this.props.icon} viewBox="0 0 32 32" >
			       <title>{this.props.icon} icon</title>
			       <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>
			    </svg>
			</a> 


        </div>
    );
  }
}

export default Button;
import React, { Component } from 'react';
//https://tachyons.io/components/collections/albums/index.html


class TextDisplayComponent extends Component {
  render() {
    return (
    	<div className = "center mw7 mw8-ns br3 hidden ba b--black-10 mv4" >
 			<h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Journal Entry - 01/01/2019</h1>

			  <div className="pa3 bt b--black-10">
			  	<p className = "avenir i h4">
			  		{/*<p>"</p>*/}
			  			{this.props.textEntry}
			  		{/*<p>"</p>*/}
			  	</p> 

			 </div>

		</div>		

    );
  }
}

export default TextDisplayComponent;

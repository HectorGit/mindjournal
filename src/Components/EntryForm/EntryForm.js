import React, { Component } from 'react';
import Button from './../Button/Button'

/*https://tachyons.io/components/cards/text-card/index.html*/

class EntryForm extends Component {
  render() {
    return (
    	<div>
	        {/*<input 

	          type = 'text' 
	          

	        />*/}
	    	{/*https://codepen.io/austinlyons/pen/ZLEKgN*/}

	        <article class="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">

			  <h1 class="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">What I feel today is...</h1>

			  <div class="pa3 bt b--black-10">
			  	<textarea class = "w-100 h4"  /> 
			  	
			  </div>

			  
				<div class = "fr tr">
				  		<Button button_name = "Save to journal" />
				</div>



			</article>


	        

			{/*http://tachyons.io/components/buttons/basic-previous-next/index.html*/}


        </div>
    );
  }
}

export default EntryForm;
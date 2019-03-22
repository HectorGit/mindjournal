import React from 'react';
import Button from './../Button/Button'

/*https://tachyons.io/components/cards/text-card/index.html*/

const EntryForm = ({onInputChange,onSubmitEntry}) => {






//  render() {
    return (
    	<div>
	        {/*<input 

	          type = 'text' 
	          

	        />*/}
	    	{/*https://codepen.io/austinlyons/pen/ZLEKgN*/}

	        <article className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">

			  <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">What I feel today is...</h1>

			  <div className="pa3 bt b--black-10">
			  	<textarea 
			  	className = "w-100 h4"  
			  	onChange = {onInputChange}
			  	/> 
			  	
			  </div>

			  
				<div 
				className = "fr tr"
				onClick = {onSubmitEntry}
				>
				  		<Button 
				  		button_name = "Save to journal" 
				  		icon = 'chevronRight'
				  		/>
				</div>



			</article>


	        

			{/*http://tachyons.io/components/buttons/basic-previous-next/index.html*/}


        </div>
    );
//  }
}

export default EntryForm;
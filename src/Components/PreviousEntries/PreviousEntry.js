import React, { Component } from 'react';
import TextDisplayComponent from './TextDisplayComponent'
import SiteDisplayComponent from './SiteDisplayComponent'
import Button from './../Button/Button'
//https://tachyons.io/components/collections/albums/index.html


//what the f
class PreviousEntry extends Component {


	render() {
	    return (
	    	<div>

					{/*{console.log("WITHIN PREVIOUSENTRY",this.props)}*/}

					{/*{const id = this.props.id}*/}


					<TextDisplayComponent textEntry = {this.props.text} className = "fn"/>
					
					<div className = "fr" onClick = {this.props.onRemoveEntry(this.props.id)}>
					<Button 
						button_name = 'Delete'
						icon = 'delete'
					/>
					</div>


					<div className = "center flex">

					{this.props.sites.map((site, i) => {
						return(
						  <SiteDisplayComponent
						  	key = {i}
						  	name = {this.props.sites[i].name}
						  	url = {this.props.sites[i].url}
						  	description = {this.props.sites[i].description}
						  />
						  )

					})}
					</div>

	        </div>

	    );
	}
}

export default PreviousEntry;

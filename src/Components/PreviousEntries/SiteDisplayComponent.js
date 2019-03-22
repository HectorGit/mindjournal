import React, { Component } from 'react';
//https://tachyons.io/components/collections/albums/index.html


class SiteDisplayComponent extends Component {
  render() {
    return (

    	<div className="center w-50 w-25-m w-20-l pa1">
		 <a href="https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music" className="db link dim tc">
	        <img src="https://webkit.org/demos/srcset/image-1x.png" alt="alt" className="w-100 db outline black-10"/>
	        <dl className="mt2 f6 lh-copy">
	          <dt className="clip">{this.props.name}</dt>
	          <dd className="ml0 black truncate w-100">{this.props.url}</dd>
	          <dt className="clip">{this.props.description}</dt>
	        </dl>
	      </a>
	    </div>
    );
  }
}

export default SiteDisplayComponent;

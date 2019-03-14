import React, { Component } from 'react';
import Recommendation from './Recommendation'

class Recommendations extends Component {
  render() {
    return (
    	<div class = "pt4">
    	    <section class="mw7 center avenir">
    			<h2 class="baskerville fw1 ph3 ph0-l">Suggested Readings</h2>
    		</section>

		    <Recommendation 
		    title = "One Awesome Article" 
		    author = "Firstname Lastname" 
		    description_tagline = "This is the description, it can get long" 
		    img_url = "https://66.media.tumblr.com/ef431d0ff655e00e7321c327d3392d80/tumblr_nonf3eDlxX1shpihko4_500.png" 
		    />
		    <Recommendation
			title = "Another Awesome Article" 
		    author = "Firstname Lastname" 
		    description_tagline = "This is the description, it can get long" 
		    img_url = "https://66.media.tumblr.com/ef431d0ff655e00e7321c327d3392d80/tumblr_nonf3eDlxX1shpihko4_500.png" />
		    />
		    <Recommendation
			title = "Yet Another Awesome Article" 
		    author = "Firstname Lastname" 
		    description_tagline = "This is the description, it can get long" 
		    img_url = "https://66.media.tumblr.com/ef431d0ff655e00e7321c327d3392d80/tumblr_nonf3eDlxX1shpihko4_500.png" />
		    />
	    </div>
    );
  }
}

export default Recommendations;

import React, { Component } from 'react';

/*https://tachyons.io/components/article-lists/title-preview-author-media/index.html*/

class Recommendation extends Component {
  render() {
    return (
    	<div>

        	<section class="mw7 center avenir">
			  <article class="bt bb b--black-10">
			    <a class="db pv4 ph3 ph0-l no-underline black dim" href="#0">
			      <div class="flex flex-column flex-row-ns">
			        <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
			          <img src= {this.props.img_url} class= "w-60-ns h-60-ns" />
			        </div>
			        <div class="w-100 w-60-ns pl3-ns">
			          <h1 class="f3 fw1 baskerville mt0 lh-title">{this.props.title}</h1>
			          <p class="f6 f5-l lh-copy">
			            {this.props.description_tagline}
			          </p>
			          <p class="f6 lh-copy mv0"> - by {this.props.author}</p>
			        </div>
			      </div>
			    </a>
			  </article>
			</section>



        </div>
    );
  }
}

export default Recommendation;

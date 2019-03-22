import React, { Component } from 'react';

/*https://tachyons.io/components/article-lists/title-preview-author-media/index.html*/

class Recommendation extends Component {
  render() {
    return (
    	<div >

        	<section className="mw7 center avenir">
			  <article className="bt bb b--black-10">
			    <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
			      <div className="flex flex-column flex-row-ns">
			        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
			          <img src= {this.props.img_url} className= "w-60-ns h-60-ns" alt = "recommendation"/>
			        </div>
			        <div className="w-100 w-60-ns pl3-ns">
			          <h1 className="f3 fw1 baskerville mt0 lh-title">{this.props.title}</h1>
			          <p className="f6 f5-l lh-copy">
			            {this.props.description_tagline}
			          </p>
			          <p className="f6 lh-copy mv0"> - by {this.props.author}</p>
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

import React from 'react';
import Recommendation from './Recommendation'

const Recommendations = ({results}) => {

	const recommendationsArray = results.map((search_result,i)  => {


			/*this is here for rendering with dummy data*/
		if(!results[i].pagemap){
			return <Recommendation 
		    key = {i}
		    title = {results[i].title} 
		    author = "Firstname Lastname" 
			img_url = "https://media.threatpost.com/wp-content/uploads/sites/103/2014/02/07023404/shutterstock_146544482.jpg" 
		    description_tagline = {results[i].snippet}
			/>

		}

		if(results[i].pagemap.cse_thumbnail){
			return <Recommendation 
		    key = {i}
		    title = {results[i].title} 
		    author = "Firstname Lastname" 
			img_url = {results[i].pagemap.cse_thumbnail[0].src}
		    description_tagline = {results[i].snippet}
			/>

		}

		return <Recommendation 
	    key = {i}
	    title = {results[i].title} 
	    author = "Firstname Lastname" 
		img_url = "https://media.threatpost.com/wp-content/uploads/sites/103/2014/02/07023404/shutterstock_146544482.jpg"    
	    description_tagline = {results[i].snippet}
		/>

		/*results[i].pagemap.cse_thumbnail[0].src ? 
			return <Recommendation 
		    key = {i}
		    title = {results[i].title} 
		    author = "Firstname Lastname" 
			img_url = {results[i].pagemap.cse_thumbnail[0].src}
		    description_tagline = {results[i].snippet}
			/>
		:
	    	return <Recommendation 
		    key = {i}
		    title = {results[i].title} 
		    author = "Firstname Lastname" 
			img_url = "https://media.threatpost.com/wp-content/uploads/sites/103/2014/02/07023404/shutterstock_146544482.jpg"    
		    description_tagline = {results[i].snippet}
		/>*/

	})
	

    return (
    	<div className = "pt4">
    	    <section className="mw7 center avenir">
    			<h2 className="baskerville fw1 ph3 ph0-l">Suggested Readings</h2>
    		</section>

    		{recommendationsArray}

    		{/*<Recommendation 
		    key = {0}
		    title = {results[0].title} 
		    author = "Firstname Lastname" 
		    description_tagline = {results[0].snippet}
		    img_url = {results[0].pagemap.cse_thumbnail[0].src}
		    img_url = {results[0].cse_thumbnail[0].src}

		    />*/}

		   	{/*<Recommendation 
		    key = {0}
		    title = {results[0].title} 
		    author = "Firstname Lastname" 
		    description_tagline = {results[0].snippet}
		    />*/}

  			{/*img_url = {results[0].pagemap.cse_thumbnail[0].src}*/}
		    {/*img_url = {results[0].cse_thumbnail[0].src}*/}


	    </div>
    );
 }


export default Recommendations;

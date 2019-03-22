import React from 'react';
import PreviousEntry from './PreviousEntry'

//https://tachyons.io/components/collections/albums/index.html


const PreviousEntries = ({onRemoveEntry,entries}) => { 


	const previousEntries = entries.map((entry, i) => {

		return <PreviousEntry 

			//PICK ONE !!!
			id = {entries[i].id} 
			key = {i} //probably will be replaced by id
			text = {entries[i].text}
			//this is mapped already !!!
			sites = {entries[i].sites}
			onRemoveEntry = {onRemoveEntry}
			

		/> 

	})

    return (

    	<div>
    	
    		
			<div>
		        <article>
					  <h2 className="f3 fw4 pa3 mv0"> Previous Entries : </h2>
				</article>

				{previousEntries}


			</div>

		</div>

    );
}


export default PreviousEntries;

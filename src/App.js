import React, { Component } from 'react';
import './App.css';
import PreviousEntries from './Components/PreviousEntries/PreviousEntries'
import Recommendations from './Components/Recommendations/Recommendations'
import EntryForm from './Components/EntryForm/EntryForm'
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
//import {dummyResults} from './DummyResults'

import 'tachyons';


class App extends Component {

  /*runs 1st */

  constructor(){
    super()
    this.state = {
      results : [], 
      entries : []
    }

  }


  onInputChange = (event) => {
    console.log(event.target.value);
    //we probably want to 
    //do something with this value,
    //as it is the 'text' for 
    //the next entry we post
  }


  onRemoveEntry = (id) => {
    fetch('http://localhost:3000/entries/'+{id}, {
      method: 'delete',
      headers: {'Content-Type':'application/json'}
      //no body needed
    })
    .then(console.log)
    .then(response => response.json())

  }


  onSubmitEntry = (id, entry_text, site_links) => {
    console.log('click');
    //we probably want to do more here
    //we might want to save the current
    //entry -e.g. post to the 'database'
    //in our server for now...
    //
    //maybe clear the text
    //but still show the links?

    fetch('http://localhost:3000/entries', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
          id: '2',
          added: new Date(),
          text : 'text for new ENTRY',
          sites: [
            {
              name: 'titleK',
              url:'www.bkng.com',
              description : 'this is an article about K'
              //author
            },
            {
              name: 'titleL',
              url:'www.byng.com',
              description : 'this is an article about L'
              //author
            },
            {
              name: 'titleM',
              url:'www.bzng.com',
              description : 'this is an article about M'
              //author
            }
          ] 
      })
    })
    .then(console.log)
    .then(response => response.json())
    //we must respond!

  }


  componentWillMount(){

    
  }

   /*problem - this fetch is made before the page loads*/
  componentDidMount(){
    //const apikey = "AIzaSyBYJTq0cuxAOlYj8VdWQd6BPK0NZWeC5GI"

    fetch('http://localhost:3000/entries')
      .then(response => response.json())
      //.then(data => console.log("data from server", data))
      .then(data => this.setState({entries:data}))



    const apikey = "AIzaSyBlJ47FlAtM4HCthPb-D0ul0U-3xSU2dXU"
    const cseId =  "006624057447797046129:cjp_a6qczes"
    const search = "health"
    const fields = "items"
    const num = 3

    //const queryURL = 'https://www.googleapis.com/customsearch/v1?key='+apikey+'&cx='+cseId+'&q='+search+'&fields='+fields+'&num='+num

    const queryURL = 'https://www.googleapis.com/customsearch/v1/siterestrict?key='+apikey+'&cx='+cseId+'&q='+search+'&fields='+fields+'&num='+num


    console.log(queryURL)

    /*
    https://jsonplaceholder.typicode.com/
    const queryURL = 'https://jsonplaceholder.typicode.com/todos/1'*/

    /*fetch(queryURL)
      .then(response => {
        return response.json();
      })
      .then(incomingResults => {
        this.setState({results: incomingResults})
      })*/
    /*'pagemap - cse thumbnail'*/

    fetch(queryURL)
      .then(response => response.json())
      //.then(json => console.log(json))
      //.then(json => console.log("json items:"+json))
      //.items))

      .then(json => this.setState({results:json.items}))
      //.then(console.log(this.state))

    /*fetch


    https://www.googleapis.com/customsearch/v1?[parameters]
    https://www.googleapis.com/customsearch/v1?key={apikey}&cx={cseId}&q={search}
    https://www.googleapis.com/customsearch/v1?key={apikey}&cx={cseId}&q={search}
    cx =  006624057447797046129:cjp_a6qczes 
    key =  AIzaSyBAm3tnx--AWtuLVG1ElqFPbQml9DlyylQ 
    q = stress*/

    /*const testText = "this is a test of the keyword extractor tool"*/



    /*IMPORTANT !!! this needs to be changed - get it from the server !!! */

      {/*this.setState({

            entries : [
          {

              id: '0',
              added: new Date(),
              text : 'lorem ipsum',
              sites: [
                {
                  name: 'titleX',
                  url:'www.gxxgle.com',
                  description : 'this is an article about X'
                  //author
                },
                {
                  name: 'titleY',
                  url:'www.gyygle.com',
                  description : 'this is an article about Y'
                  //author
                },
                {
                  name: 'titleZ',
                  url:'www.gzzgle.com',
                  description : 'this is an article about Z'
                  //author
                }
              ] 

            },
            {

              id: '1',
              added: new Date(),
              text : 'ipsum lorem',
              sites: [
                {
                  name: 'titleA',
                  url:'www.yxxhoo.com',
                  description : 'this is an article about A'
                  //author
                },
                {
                  name: 'titleB',
                  url:'www.yyyhoo.com',
                  description : 'this is an article about B'
                  //author
                },
                {
                  name: 'titleC',
                  url:'www.yzzhoo.com',
                  description : 'this is an article about C'
                  //author
                }
              ] 

            },
            {

              id: '2',
              added: new Date(),
              text : 'lorem lorem ipsum ipsum',
              sites: [
                {
                  name: 'titleK',
                  url:'www.bkng.com',
                  description : 'this is an article about K'
                  //author
                },
                {
                  name: 'titleL',
                  url:'www.blng.com',
                  description : 'this is an article about L'
                  //author
                },
                {
                  name: 'titleM',
                  url:'www.bmng.com',
                  description : 'this is an article about M'
                  //author
                }
              ] 

            }

          ]

    })
    */}


    /*IMPORTANT !!! this needs to be changed - get it from the server !!! */


    console.log(this.state)
 
  }


  render() {
    return (
      <div className="App">


        {console.log("this is state currently:")}
        {console.log(this.state)}


        <Logo/>

        <Navigation/>

        <EntryForm 
        onInputChange = {this.onInputChange} 
        onSubmitEntry = {this.onSubmitEntry}
        />
 

        {console.log('this is the state at render time')}
        {console.log(this.state.results)}

        <div>

          {/*<Recommendations results = {this.state.results ? this.state.results : dummyResults}/>*/}
          
          {/*<Recommendations results = {this.state.results ? this.state.results : dummyResults}/>*/}
          {this.state.results ? <Recommendations results = {this.state.results} /> : <p>no recommendations</p> }

        </div>


        {/* 
            here is where we could connect the server 
            because we need to do ---> GET /entries.
            initially - our server has the data we 
            hardcoded in it.
        */}


        {this.state.entries ? 
        <PreviousEntries 
        entries = {this.state.entries}
        onRemoveEntry = {this.onRemoveEntry}
        />  
        : <p>no previous entries</p>}



        {/*this is a comment

          api - 194 lesson 
          udemy


        */}

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import PreviousEntries from './Components/PreviousEntries/PreviousEntries'
import Recommendations from './Components/Recommendations/Recommendations'
import EntryForm from './Components/EntryForm/EntryForm'
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'

import 'tachyons';


class App extends Component {

  /*runs 1st */

  constructor(){
    super()
    this.state = {
      results : [], 
      entry : ""
    }

  }


   /*problem - this fetch is made before the page loads*/
  componentDidMount(){

    const apikey = "AIzaSyBYJTq0cuxAOlYj8VdWQd6BPK0NZWeC5GI"
    const cseId =  "006624057447797046129:cjp_a6qczes"
    const search = "glasses"
    const fields = "items"
    const num = 3

    const queryURL = 'https://www.googleapis.com/customsearch/v1?key='+apikey+'&cx='+cseId+'&q='+search+'&fields='+fields+'&num='+num

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
      /*.then(jston => console.log(Stringify(json)))*/
      //.then(json => console.log(json))
      //.then(json => console.log("json items:"+json.items))
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

  }


  render() {
    return (
      <div className="App">


        {console.log("this is state currently:")}
        {console.log(this.state)}


        <Logo/>

        <Navigation/>

        <EntryForm/>

        <Recommendations/>

        <PreviousEntries/>



        {/*this is a comment

          api - 194 lesson 
          udemy


        */}

      </div>
    );
  }
}

export default App;

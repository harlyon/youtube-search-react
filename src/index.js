import React, { Component } from "react"
import ReactDOM from "react-dom"
//
import YTSearch from 'youtube-api-search'

import Search_bar from "./components/Search_bar"
import Video_list from "./components/Video_list"

//variable to hold the API Key
const API_KEY = 'AIzaSyBYf1d1OI9RrbBZ8ox-HppCUqyndH8herc';


// Create a new component
// This component should create some html
class App extends Component{
  constructor(props){
    super(props);
    this.state = {  videos: [] };
    //youtube search
    YTSearch({key: API_KEY, term:'surfboards'}, (videos) => {
      this.setState({ videos });
    });

  }
  render(){
      return (<div>
            <Search_bar />
            <Video_list videos={this.state.videos} />
          </div>
        )
  }
}

// Take this  component's generated HTML and render it on the page (In the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))

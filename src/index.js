import React, { Component } from "react"
import ReactDOM from "react-dom"
//
import YTSearch from 'youtube-api-search'

import Search_bar from "./components/Search_bar"
import Video_list from "./components/Video_list"
import Video_detail from "./components/Video_detail"

//variable to hold the API Key
const API_KEY = 'AIzaSyBYf1d1OI9RrbBZ8ox-HppCUqyndH8herc';


// Create a new component
// This component should create some html
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    //youtube search
    YTSearch({key: API_KEY, term:'alana blanchard'}, (videos) => {
      this.setState({
        videos:videos,
        selectedVideo: videos[0]
       });
    });

  }
  render(){
      return (<div>
            <Search_bar />
            <Video_detail video={this.state.selectedVideo}/>
            <Video_list videos={this.state.videos} />
          </div>
        )
  }
}

// Take this  component's generated HTML and render it on the page (In the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))

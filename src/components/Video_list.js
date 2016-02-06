import React from "react"
import Video_list_item from "./Video_list_item"

const Video_list = (props) => {

  const videoItems = props.videos.map( video => {
      return <Video_list_item key = {video.etag} video = {video} />
  })

  return(
    <ul className='col-md-4 list-group'>
      {videoItems}
    </ul>
  )
}

export default Video_list;

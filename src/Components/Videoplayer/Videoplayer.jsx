import React from 'react'
import './Videoplayer.css'
import video from '../../assets/college-video.mp4'

const Videoplayer = ({playstate,setplaystate}) => {
  return (
    <div className={`video-player ${playstate?'':'hide'}`}>
         <video src={video} autoplay video controls></video>

    </div>
  )
}

export default Videoplayer

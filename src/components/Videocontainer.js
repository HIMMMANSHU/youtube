import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { YOUTUBE_API } from '../utils/Constant'

const Videocontainer = () => {
  const[ video, setVideo]= useState([]);
useEffect(()=>{
  getvideo();
}, []);

const getvideo = async () => {
  const vidata = await fetch(YOUTUBE_API);
  const json = await vidata.json();
  // Keep state as an array so `video.map(...)` never crashes.
  setVideo(Array.isArray(json?.items) ? json.items : []);

}

  return (
    <div>
      {video.map(video => (
        <Videocard key={video.id} info={video} />
      ))}
    </div>
  );
  
} 

export default Videocontainer;
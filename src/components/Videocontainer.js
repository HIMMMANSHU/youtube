import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { YOUTUBE_API } from '../utils/Constant'

const Videocontainer = () => {
  const[ video, setVideo]= useState([]);
useEffect(()=>{
  getvideo();
}, []);

const getvideo = async () => {
const vidata= await fetch(YOUTUBE_API);
const json= await vidata.json();
setVideo(json.items)

}
  return  <div>
    <Videocard info = {video[0]}/>
    </div>;
  
}

export default Videocontainer;
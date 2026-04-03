import React from 'react'

const Videocard = ({ info }) => {
    // YouTube items can be incomplete; keep rendering resilient.
    if (!info?.snippet) return null;

    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
   
    return (
      <div className='p-2 m-2 w-80 shadow-lg'>
        <img className=' rounded-lg' alt='thumbnail' src={thumbnails?.medium?.url}/>
        <ul>
          <li className='font-bold'>{title}</li>
          <li className='mt-2'>{channelTitle}</li>
          <li>{statistics?.viewCount} views</li>
        </ul>
    </div>
  )
}

export default Videocard;
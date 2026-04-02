import React from 'react'

const Videocard = ({ info }) => {
  if (!info?.snippet || !info?.statistics) return null;

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnail } = snippet;
  return (
    <div>
        <img alt="thumbnail" src={thumbnail.medium.url} />
        <ul>
            <li>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount}</li>   
        </ul>
    </div>
  )
}

export default Videocard;
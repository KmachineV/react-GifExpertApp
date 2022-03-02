import React from 'react'

export const GifGridItem = ({url, title}) => {


  return (
    <div className='card animate__heartBeat'>
        <img src={url} alt={title}></img>
        <h3>{title}</h3>
    </div>
  )
}

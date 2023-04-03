import React from 'react'
import { useDrag } from 'react-dnd'



function Picture({ id, url, caption }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    })
  }))
  return (
    <div className='box' key={id}>
      <img
        src={url}
        alt=""
        ref={drag}
        style={{ border: isDragging ? "5px solid pink" : "0px" }}
      />
      <br />
      {caption}
    </div>

  )
}

export default Picture
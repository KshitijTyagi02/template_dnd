import React from 'react'
import Picture from './Picture'
import { useDrop } from 'react-dnd'


function PictureContainer({board,addImageToBoard,itemNo}) {
    const itemClass="grid-item item" + itemNo
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))
  return (
    <div class={itemClass} ref={drop} ><Picture url={board?.url} id={board?.id}/></div>
  )
}

export default PictureContainer
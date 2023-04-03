import React, { useState } from 'react'
import Picture from './Picture'
import "../App.css"
import { useDrop } from 'react-dnd'
import PictureList from '../PictureList.json'
import PictureContainer from './PictureContainer'
function DragDrop() {

    const [board, setBoard] = useState([]);
 
    const addImageToBoard = (id) => {
        const pictureList = PictureList.find((picture) => id === picture.id)
        setBoard((board) => [...board, pictureList])
    }
    return (
        <>
        {console.log(board)}
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-evenly', marginBottom: '75px' }}>
                {PictureList && PictureList.map((picture) => {
                    return <Picture style={{ height: '50px !important', width: "50px !important" }} url={picture.url} id={picture.id} caption={picture.caption} />
                }
                )}
            </div>

            {/* <div className="Board" ref={drop}>
                {board.map((picture) => {
                    return <Picture url={picture.url} id={picture.id} />;
                })}
            </div> */}
            <div class="grid-container">
                <PictureContainer board={board[0]} addImageToBoard={addImageToBoard} itemNo={1}/>
                <PictureContainer board={board[1]} addImageToBoard={addImageToBoard} itemNo={2}/>
                <PictureContainer board={board[2]} addImageToBoard={addImageToBoard} itemNo={3}/>
                <PictureContainer board={board[3]} addImageToBoard={addImageToBoard} itemNo={4}/>
                <PictureContainer board={board[4]} addImageToBoard={addImageToBoard} itemNo={5}/>
               
            </div> 


        </>
    )
}

export default DragDrop
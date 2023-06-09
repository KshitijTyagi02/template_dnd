import React, { useState } from 'react'
import Picture from './Picture'
import "../App.css"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PictureList from '../PictureList.json'
import PictureContainer from './PictureContainer'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
function DragDrop() {

    const [board, setBoard] = useState([]);
    const [templateID, setTemplateID] = useState('');

    const handleTemplateChange = (event) => {
        const getTemplateID = event.target.value;
        setTemplateID(getTemplateID);
    }

    const addImageToBoard = (id) => {
        const pictureList = PictureList.find((picture) => id === picture.id)
        setBoard((board) => [...board, pictureList])
    }
    return (
        <>
            <Box sx={{ width: '100%', justifyContent: 'center', marginTop: '50px', marginBottom: '50px' }}>
                <Typography variant="h4">Images from JSON</Typography>
            </Box>

            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-evenly', marginBottom: '75px' }}>
                {PictureList && PictureList.map((picture) => {
                    return <Picture style={{ height: '50px !important', width: "50px !important" }} url={picture.url} id={picture.id} caption={picture.caption} />
                }
                )}
            </div>

            <div sx={{ display: 'flex', justifyContent: 'center' }}>
                <FormControl sx={{ m: 10, minWidth: 520 }} size="large" variant="standard">
                    <InputLabel id="template-select-label" sx={{ fontSize: '40px' }}>Select Template</InputLabel>
                    <Select
                        sx={{ width: '1000px', height: '100px' }}
                        labelId="demo-simple-select-label"
                        id="template-select-label"
                        label="Select Template"
                        value=''
                        onChange={(e) => (handleTemplateChange(e))}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>Template 1</MenuItem>
                        <MenuItem value={2}>Template 2</MenuItem>
                    </Select>
                </FormControl>
            </div>

            {templateID === 1 && (<div class="grid-container" id='Template 1'>
                <PictureContainer board={board[0]} addImageToBoard={addImageToBoard} itemNo={1} />
                <PictureContainer board={board[1]} addImageToBoard={addImageToBoard} itemNo={2} />
                <PictureContainer board={board[2]} addImageToBoard={addImageToBoard} itemNo={3} />
                <PictureContainer board={board[3]} addImageToBoard={addImageToBoard} itemNo={4} />
                <PictureContainer board={board[4]} addImageToBoard={addImageToBoard} itemNo={5} />
            </div>)}
            {templateID === 2 && (<div class="grid-container1" id='Template 2'>
                <PictureContainer board={board[0]} addImageToBoard={addImageToBoard} />
                <PictureContainer board={board[1]} addImageToBoard={addImageToBoard} />
                <PictureContainer board={board[2]} addImageToBoard={addImageToBoard} />
                <PictureContainer board={board[3]} addImageToBoard={addImageToBoard} />
                <PictureContainer board={board[4]} addImageToBoard={addImageToBoard} />
                <PictureContainer board={board[5]} addImageToBoard={addImageToBoard} />
                <PictureContainer board={board[6]} addImageToBoard={addImageToBoard} />
                <PictureContainer board={board[7]} addImageToBoard={addImageToBoard} />
                <PictureContainer board={board[8]} addImageToBoard={addImageToBoard} />
            </div>)}

        </>
    )
}

export default DragDrop
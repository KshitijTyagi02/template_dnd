import {DndProvider} from "react-dnd"
import {HTML5Backend} from "react-dnd-html5-backend"
import DragDrop from "./components/DragDrop";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
function App() {
  return (
   <DndProvider backend={HTML5Backend}>
   <div className="App">
   <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Template Create
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
    <DragDrop/>
   </div>
   </DndProvider>
  );
}

export default App;

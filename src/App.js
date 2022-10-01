import "./App.css";
import {useRef} from 'react';
import Show_data from "./Show_Data/Show_data";
import Button from "@mui/material/Button";

function App() {
  const childRef = useRef();
  return (
    <div className="App">
      <div className="button">
        <span><Button variant="outlined" onClick={() => childRef.current.sortByName()}>Sort By Name</Button></span>
        <span><Button variant="outlined" onClick={() => childRef.current.sortByAge()}>Sort By Age</Button></span>
      </div>
      <Show_data ref={childRef}/>
    </div>
  );
}

export default App;

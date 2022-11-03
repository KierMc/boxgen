import './App.css';
import React, {useState} from 'react';
import Boxes from './components/Boxes';
import Form from './components/Form';

function App() {
  const[boxes, setBoxes] = useState([])
  const[boxColor, setBoxColor] = useState({
    color: ""
  })

  return (
    <div className="App">
      <header className='App-header'>
        <Form 
        boxColor={boxColor}
        setBoxColor={setBoxColor}
        boxes={boxes}
        setBoxes={setBoxes}
        />
        {
          Boxes.map(box => <box color={box.color}/>)
        }
      </header>
    </div>
  );
}

export default App;

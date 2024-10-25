// Write your Color component here
import { useState } from "react";
// import Picker from './Picker';
import Color from './Color';

const App = () => {

  const [selectedColor, setSelectedColor] = useState('');

  return (
    <div id="container">
      <div id="navbar">
        <h2>Selected Color:{selectedColor}</h2>
        <div id="colors-list">
        <Color color="orange" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
        <Color color="black" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
        <Color color="purple" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
        </div>
          
      </div>
      
    </div>
  );
};

export default App;

//https://color-picker-5a4l.onrender.com

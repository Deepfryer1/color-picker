// Write your Color component here
import { useState } from 'react'
const Color = (props) => {
  return <div className={props.colors}></div>;
};
const App = () => {
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className="red">red</div>
      </div>
      <div id="colors-list">
        <Color colors="yellow" />
  <Color colors="red"/>
  <Color colors="green"/></div>
    </div>
  );
};

export default App;

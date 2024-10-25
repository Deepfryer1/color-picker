// import Picker from "./Picker";


const Color = ({ color, setSelectedColor }) => {
    
    console.log(color);
    return <div className={color} onClick={() => setSelectedColor(color)}></div>;
};

export default Color;



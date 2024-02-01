import './App.css'
import {useState} from "react";
import {BinarySearch} from "./BinarySearch.jsx";

function App() {
    const [inputArray, setInputArray] = useState('');
    const [inputTarget, setInputTarget] = useState('');
    const [boxesArray, setBoxesArray] = useState([]);
    const [currentMid, setCurrentMid] = useState(null);
    const [currentStart, setCurrentStart] = useState(null);
    const [currentEnd, setCurrentEnd] = useState(null);

    const handleInputArrayChange = (event) => {
        setInputArray(event.target.value);
    };

    const handleInputTargetChange = (event) => {
        setInputTarget(event.target.value);
    };

    const handleSubmit = () => {
        const array = inputArray.split(',').map(Number);
        const target = Number(inputTarget);
        if (array.some(isNaN)) {
            alert('Invalid input. Please enter a comma-separated list of numbers.');
        } else {
            console.log(array);
            const boxes = array.map((value, id) => ({id, value}));
            setBoxesArray(boxes);
            BinarySearch(array, target, (start, mid, end) => {
                setCurrentStart(start);
                setCurrentMid(mid);
                setCurrentEnd(end);
            });
        }
    };



    return (
        <>
            <input type="text" value={inputArray} onChange={handleInputArrayChange} placeholder={"1,2,3,4,5,6"}/>
            <input type={"number"} value={inputTarget} onChange={handleInputTargetChange} placeholder={"3"}/>
            <button onClick={handleSubmit}>Submit</button>
            <br/>
            <div id={"boxes"}>
                {boxesArray.map((box, index) =>
                    <div key={box.id} className={`box ${index === currentStart ? 'start' : ''} ${index === currentMid ? 'mid' : ''} ${index === currentEnd ? 'end' : ''}`}>{box.value}</div>
                )}
            </div>
        </>
    );
}

export default App

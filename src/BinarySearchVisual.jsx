import './App.css'
import {useState} from "react";
import {BinarySearch} from "./BinarySearch.jsx";

function BinarySearchVisual() {
    const [inputArray, setInputArray] = useState('');
    const [inputTarget, setInputTarget] = useState('');
    const [boxesArray, setBoxesArray] = useState([]);
    const [currentMid, setCurrentMid] = useState(null);
    const [currentStart, setCurrentStart] = useState(null);
    const [currentEnd, setCurrentEnd] = useState(null);
    const [currentCount, setCurrentCount] = useState(null);
    const [resultsText, setResultsText] = useState('');

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
            BinarySearch(array, target, (start, mid, end, count) => {
                setCurrentStart(start);
                setCurrentMid(mid);
                setCurrentEnd(end);
                setCurrentCount(count);
            }).then((result) => {
                if (result === -1) {
                    setResultsText('Number not found');
                } else {
                    setResultsText('Number found at index ' + result);
                }
            });
        }
    };



    return (
        <>
            <div className={"header"}>
                <h1>Binary Search</h1>
                <h2>Time complexity: O(logN)</h2>
            </div>

            <div className={"input"}>
                Sample input arrays to test:
                <div className={"inputButtonDiv"}>
                    <div className={"sampleInput"}>
                        <button className={"inputButton"} onClick={() => setInputArray(Array.from({length: 10}, (_, i) => i + 1).join(','))}>10</button>
                    </div>
                    <div className={"sampleInput"}>
                        <button className={"inputButton"} onClick={() => setInputArray(Array.from({length: 50}, (_, i) => i + 1).join(','))}>100</button>
                    </div>
                    <div className={"sampleInput"}>
                        <button className={"inputButton"} onClick={() => setInputArray(Array.from({length: 100}, (_, i) => i + 1).join(','))}>100</button>
                    </div>
                    <div className={"sampleInput"}>
                        <button className={"inputButton"} onClick={() => setInputArray(Array.from({length: 200}, (_, i) => i + 1).join(','))}>200</button>
                    </div>
                </div>
                Current input array:
                <div className={"sampleInput"}>
                    <input type="text" value={inputArray} onChange={handleInputArrayChange} placeholder={"1,2,3,4,5,6"}/>
                </div>
                <br />
                Target number:
                <div className={"sampleInput"}>
                <input type={"number"} value={inputTarget} onChange={handleInputTargetChange} placeholder={"3"}/>
                </div>
                <button onClick={handleSubmit}>Search</button>
            </div>
            <br/>
            Current amount of loops: <b>{currentCount}</b>
            <br />
            <b>Result:</b> {resultsText}
            <div id={"legend"}>
                <div className={"legendBoxes"}>Start = <div className={"box start legendBox"}> </div></div>
                <div className={"legendBoxes"}>Mid = <div className={"box mid legendBox"}> </div> </div>
                <div className={"legendBoxes"}>End = <div className={"box end legendBox"}> </div> </div>
            </div>
            <div id={"boxes"}>
                {boxesArray.map((box, index) =>
                    <div key={box.id} className={`box ${index === currentStart ? 'start' : ''} ${index === currentMid ? 'mid' : ''} ${index === currentEnd ? 'end' : ''}`}>{box.value}</div>
                )}
            </div>
        </>
    );
}

export default BinarySearchVisual

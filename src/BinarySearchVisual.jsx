import './App.css'
import {useState} from "react";
import {BinarySearch} from "./BinarySearch.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

function BinarySearchVisual() {
    const [inputArray, setInputArray] = useState('');
    const [inputTarget, setInputTarget] = useState('');
    const [boxesArray, setBoxesArray] = useState([]);
    const [currentMid, setCurrentMid] = useState(null);
    const [currentStart, setCurrentStart] = useState(null);
    const [currentEnd, setCurrentEnd] = useState(null);
    const [currentCount, setCurrentCount] = useState(null);
    const [resultsText, setResultsText] = useState('');
    const [resultNumber, setResultNumber] = useState(null);

    const handleInputArrayChange = (event) => {
        setInputArray(event.target.value);
    };

    const handleInputTargetChange = (event) => {
        setInputTarget(event.target.value);
    };

    const handleSubmit = () => {
        const array = inputArray.split(',').map(Number);
        const target = Number(inputTarget);
        setResultsText('');
        setResultNumber(null);
        if (array.some(isNaN)) {
            alert('Invalid input. Please enter a comma-separated list of numbers.');
        } else {
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
                    setResultsText('Number found at index ');
                    setResultNumber(result);
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
                <div id={"binaryBox"}>
                <div className={"label"}>
                    Range
                </div>
                <div className={"inputButtonDiv"}>
                    <div className={"sampleInput"}>
                        <button className={"inputButton"}
                                onClick={() => setInputArray(Array.from({length: 50}, (_, i) => i + 1).join(','))}>50
                        </button>
                    </div>
                    <div className={"sampleInput"}>
                        <button className={"inputButton"}
                                onClick={() => setInputArray(Array.from({length: 150}, (_, i) => i + 1).join(','))}>150
                        </button>
                    </div>
                    <div className={"sampleInput"}>
                        <input type={"number"} className={"inputBox customBinaryArray"}
                               onBlur={(e) => setInputArray(Array.from({length: Number(e.target.value)}, (_, i) => i + 1).join(','))}
                               onKeyDown={(e) => {
                                   if (e.key === 'Enter') {
                                       e.preventDefault();
                                       setInputArray(Array.from({length: Number(e.target.value)}, (_, i) => i + 1).join(','));
                                   }
                               }} placeholder={"250"}>
                        </input>
                    </div>
                </div>
                    <div className={"sampleInput targetButtonDiv"}>
                        <input id={"binaryArray"} className={"inputBox"} type="text" value={inputArray}
                               onChange={handleInputArrayChange} placeholder={"1,2,3,4,5,6"}/>
                    </div>
                </div>
                <div id={"binaryBox"}>
                    <div className={"labelTarget"}>
                    Target
                </div>
                    <div className={"inputButtonDiv targetButtonDiv"}>
                        <div className={"sampleInput"}>
                            <button className={"inputButton targetButton"}
                                    onClick={() => setInputTarget(inputArray.split(',')[0])}>Start
                            </button>
                        </div>
                        <div className={"sampleInput"}>
                            <button className={"inputButton targetButton"}
                                    onClick={() => setInputTarget(inputArray.split(',').pop())}>End
                            </button>
                        </div>
                    </div>
                    <div className={"sampleInput binarySubmit targetButtonDiv"}>
                        <input className={"inputBox"} id={"binaryNumber"} type={"number"} value={inputTarget}
                               onChange={handleInputTargetChange} placeholder={"3"}/>
                        <button id={"binarySubmit"} onClick={handleSubmit}><FontAwesomeIcon icon={faSearch}/></button>
                </div>
            </div>
            </div>
            <br/>
            Current amount of loops: <b>{currentCount}</b>
            <br/>
            <b>Result:</b> {resultsText} <b>{resultNumber}</b>
            <div id={"legend"}>
                <div className={"legendBoxes"}>Range: <div className={"box within legendBox"}></div></div>
                <div className={"legendBoxes"}>Mid: <div className={"box mid legendBox"}> </div> </div>
            </div>
            <div id={"boxes"}>
                {boxesArray.map((box, index) =>
                    <div key={box.id} className={`box ${index === currentStart ? 'start' : ''} ${index === currentMid ? 'mid' : ''} ${index === currentEnd ? 'end' : ''} ${index < currentEnd && index > currentStart? 'within' : ''}`}>{box.value}</div>
                )}
            </div>
        </>
    );
}

export default BinarySearchVisual

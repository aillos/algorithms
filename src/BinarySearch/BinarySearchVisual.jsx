import '../App.css'
import {useState} from "react";
import {BinarySearch} from "./BinarySearch.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import java from 'programming-languages-logos/src/java/java.svg'
import python from 'programming-languages-logos/src/python/python.svg'
import javascript from 'programming-languages-logos/src/javascript/javascript.svg'
import csharp from 'programming-languages-logos/src/csharp/csharp.svg'
import cpp from 'programming-languages-logos/src/cpp/cpp.svg'
import JavascriptCodeModal from "./JavascriptCodeModal.jsx";
import JavaCodeModal from "./JavaCodeModal.jsx";
import PythonCodeModal from "./PythonCodeModal.jsx";
import CSharpCodeModal from "./CSharpCodeModal.jsx";
import CppCodeModal from "./CppCodeModal.jsx";

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
    const [showJavascriptCode, setShowJavascriptCode] = useState(false);
    const [showJavaCode, setShowJavaCode] = useState(false);
    const [showPythonCode, setShowPythonCode] = useState(false);
    const [showCsharpCode, setShowCsharpCode] = useState(false);
    const [showCppCode, setShowCppCode] = useState(false);

    const closeCppCode = () => {
        setShowCppCode(false);
    }

    const openCppCode = () => {
        setShowCppCode(true);
    }

    const closeJavascriptCode = () => {
        setShowJavascriptCode(false);
    }

    const openJavascriptCode = () => {
        setShowJavascriptCode(true);
    }

    const closeJavaCode = () => {
        setShowJavaCode(false);
    }

    const openJavaCode = () => {
        setShowJavaCode(true);
    }

    const closePythonCode = () => {
        setShowPythonCode(false);
    }

    const openPythonCode = () => {
        setShowPythonCode(true);
    }

    const closeCsharpCode = () => {
        setShowCsharpCode(false);
    }

    const openCsharpCode = () => {
        setShowCsharpCode(true);
    }


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
                <div className={"code"}>
                    <img src={java} alt={"java"} height={"30px"} onClick={openJavaCode} />
                    <JavaCodeModal show={showJavaCode} onHide={closeJavaCode}/>
                    <img src={javascript} alt={"javascript"} height={"30px"} onClick={openJavascriptCode}/>
                    <JavascriptCodeModal show={showJavascriptCode} onHide={closeJavascriptCode}/>
                    <img src={python} alt={"python"} height={"30px"} onClick={openPythonCode}/>
                    <PythonCodeModal show={showPythonCode} onHide={closePythonCode}/>
                    <img src={csharp} alt={"csharp"} height={"30px"} onClick={openCsharpCode}/>
                    <CSharpCodeModal show={showCsharpCode} onHide={closeCsharpCode}/>
                    <img src={cpp} alt={"cplusplus"} height={"30px"} onClick={openCppCode}/>
                    <CppCodeModal show={showCppCode} onHide={closeCppCode}/>

                </div>
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

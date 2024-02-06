import '../App.css'
import {useState} from "react";
import {BinarySearchFunction} from "./BinarySearchFunction.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faSearch} from "@fortawesome/free-solid-svg-icons";
import java from 'programming-languages-logos/src/java/java.svg'
import python from 'programming-languages-logos/src/python/python.svg'
import javascript from 'programming-languages-logos/src/javascript/javascript.svg'
import csharp from 'programming-languages-logos/src/csharp/csharp.svg'
import cpp from 'programming-languages-logos/src/cpp/cpp.svg'
import CodeModal from "../helper/CodeModal.jsx";
import {cppCode, cSharpCode, javaCode, javascriptCode, pythonCode} from "./BinarySearchCode.jsx";

function BinarySearch() {
    const [inputArray, setInputArray] = useState('');
    const [inputTarget, setInputTarget] = useState('');
    const [boxesArray, setBoxesArray] = useState([]);
    const [currentMid, setCurrentMid] = useState(null);
    const [currentStart, setCurrentStart] = useState(null);
    const [currentEnd, setCurrentEnd] = useState(null);
    const [currentCount, setCurrentCount] = useState(null);
    const [resultsText, setResultsText] = useState('');
    const [resultNumber, setResultNumber] = useState(null);
    const [showCppCode, setShowCppCode] = useState(false);
    const [showJavaCode, setShowJavaCode] = useState(false);
    const [showJavascriptCode, setShowJavascriptCode] = useState(false);
    const [showPythonCode, setShowPythonCode] = useState(false);
    const [showCsharpCode, setShowCsharpCode] = useState(false);

    const navigateHome = () => {
        window.location.href = '/';
    }

    const closeCode = (language) => {
        switch(language) {
            case 'java':
                setShowJavaCode(false);
                break;
            case 'javascript':
                setShowJavascriptCode(false);
                break;
            case 'python':
                setShowPythonCode(false);
                break;
            case 'csharp':
                setShowCsharpCode(false);
                break;
            case 'cpp':
                setShowCppCode(false);
                break;
        }
    }

    const openCode = (language) => {
        switch (language) {
            case 'java':
                setShowJavaCode(true);
                break;
            case 'javascript':
                setShowJavascriptCode(true);
                break;
            case 'python':
                setShowPythonCode(true);
                break;
            case 'csharp':
                setShowCsharpCode(true);
                break;
            case 'cpp':
                setShowCppCode(true);
                break;
        }
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
            BinarySearchFunction(array, target, (start, mid, end, count) => {
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
                <div className={"headerText"}><div className={"backIcon"}><FontAwesomeIcon icon={faHome} onClick={navigateHome} /></div>
                    <h1>Binary Search</h1></div>
                    <h2>Time complexity: O(logN)</h2>
                    <div className={"code"}>
                    <img src={java} alt={"java"} height={"30px"} onClick={() => openCode("java")} />
                    <CodeModal show={showJavaCode} onHide={() => closeCode("java")} code={javaCode} language={"Java"}/>
                    <img src={javascript} alt={"javascript"} height={"30px"} onClick={() => openCode("javascript")}/>
                    <CodeModal show={showJavascriptCode} onHide={() => closeCode("javascript")} code={javascriptCode} language={"Javascript"}/>
                    <img src={python} alt={"python"} height={"30px"} onClick={() => openCode("python")}/>
                    <CodeModal show={showPythonCode} onHide={() => closeCode("python")} code={pythonCode} language={"Python"}/>
                    <img src={csharp} alt={"csharp"} height={"30px"} onClick={() => openCode("csharp")}/>
                    <CodeModal show={showCsharpCode} onHide={() => closeCode("csharp")} code={cSharpCode} language={"C#"}/>
                    <img src={cpp} alt={"cplusplus"} height={"30px"} onClick={() => openCode("cpp")}/>
                    <CodeModal show={showCppCode} onHide={() => closeCode("cpp")} code={cppCode} language={"C++"}/>
                </div>
            </div>

            <div className={"input"}>
                <div id={"inputBoxes"}>
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
                        <input type={"number"} className={"inputBox customInputArray"}
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
                        <input id={"inputArray"} className={"inputBox"} type="text" value={inputArray}
                               onChange={handleInputArrayChange} placeholder={"1,2,3,4,5,6"}/>
                    </div>
                </div>
                <div id={"inputBoxes"}>
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
                    <div className={"sampleInput inputSubmit targetButtonDiv"}>
                        <input className={"inputBox"} id={"inputNumber"} type={"number"} value={inputTarget}
                               onChange={handleInputTargetChange} placeholder={"3"}/>
                        <button id={"inputStart"} onClick={handleSubmit}><FontAwesomeIcon icon={faSearch}/></button>
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

export default BinarySearch

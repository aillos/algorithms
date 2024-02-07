import '../App.css'
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faSearch} from "@fortawesome/free-solid-svg-icons";
import java from 'programming-languages-logos/src/java/java.svg'
import python from 'programming-languages-logos/src/python/python.svg'
import javascript from 'programming-languages-logos/src/javascript/javascript.svg'
import csharp from 'programming-languages-logos/src/csharp/csharp.svg'
import cpp from 'programming-languages-logos/src/cpp/cpp.svg'
import CodeModal from "../helper/CodeModal.jsx";
import {cppCode, cSharpCode, javaCode, javascriptCode, pythonCode} from "./QuickSortCode.jsx";
import {QuickSortFunction} from "./QuickSortFunction.jsx";

function QuickSort() {
    const [inputArray, setInputArray] = useState('');
    const [arrayLength, setArrayLength] = useState(null);
    const [boxesArray, setBoxesArray] = useState([]);
    const [currentCorrect, setCorrect] = useState([]);
    const [correctLength, setCorrectLength] = useState(0);
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

    const handleSubmit = () => {
        const array = inputArray.split(',').map(Number);
        setCorrect([]);
        setArrayLength(array.length);
        if (array.some(isNaN)) {
            alert('Invalid input. Please enter a comma-separated list of numbers.');
        } else {
            QuickSortFunction(array, (array, pi) => {
                const boxes = array.map((value, id) => ({id, value}));
                setBoxesArray(boxes);
                setCorrect(prevCorrect => [...prevCorrect, boxes[pi].value]);
            }).then(r =>
                    setCorrectLength(r)
            );
        }
    };

    useEffect(() => {
        setCorrectLength(currentCorrect.length);
    }, [currentCorrect]);

    return (
        <>
            <div className={"header"}>
                <div className={"headerText"}>
                    <div className={"backIcon"}><FontAwesomeIcon icon={faHome} onClick={navigateHome}/></div>
                    <h1>Quick Sort</h1></div>
                <h2>Time complexity: O(nlogN)</h2>
                <div className={"code"}>
                    <img src={java} alt={"java"} height={"30px"} onClick={() => openCode("java")}/>
                    <CodeModal show={showJavaCode} onHide={() => closeCode("java")} code={javaCode} language={"Java"}/>
                    <img src={javascript} alt={"javascript"} height={"30px"} onClick={() => openCode("javascript")}/>
                    <CodeModal show={showJavascriptCode} onHide={() => closeCode("javascript")} code={javascriptCode}
                               language={"Javascript"}/>
                    <img src={python} alt={"python"} height={"30px"} onClick={() => openCode("python")}/>
                    <CodeModal show={showPythonCode} onHide={() => closeCode("python")} code={pythonCode}
                               language={"Python"}/>
                    <img src={csharp} alt={"csharp"} height={"30px"} onClick={() => openCode("csharp")}/>
                    <CodeModal show={showCsharpCode} onHide={() => closeCode("csharp")} code={cSharpCode}
                               language={"C#"}/>
                    <img src={cpp} alt={"cplusplus"} height={"30px"} onClick={() => openCode("cpp")}/>
                    <CodeModal show={showCppCode} onHide={() => closeCode("cpp")} code={cppCode} language={"C++"}/>
                </div>
            </div>

            <div className={"input"}>
                <div id={"inputBoxes"}>
                    <div className={"label"}>
                        Array
                    </div>
                    <div className={"inputArrayDiv"}>
                        <div className={"sampleInput sorting"}>
                            <button className={"inputButton"}
                                    onClick={() => setInputArray(Array.from({length: 10}, () => Math.floor(Math.random() * 70) + 1).join(','))}>10
                            </button>
                        </div>
                        <div className={"sampleInput sorting"}>
                            <button className={"inputButton"}
                                    onClick={() => setInputArray(Array.from({length: 25}, () => Math.floor(Math.random() * 70) + 1).join(','))}>25
                            </button>
                        </div>
                        <div className={"sampleInput sorting"}>
                            <button className={"inputButton"}
                                    onClick={() => setInputArray(Array.from({length: 50}, () => Math.floor(Math.random() * 70) + 1).join(','))}>50
                            </button>
                        </div>
                        <div className={"sampleInput testSort"}>
                            <input type={"number"} className={"inputBox customInputArray"}
                                   onBlur={(e) => setInputArray(Array.from({length: Number(e.target.value)}, () => Math.floor(Math.random() * 70) + 1).join(','))}
                                   onKeyDown={(e) => {
                                       if (e.key === 'Enter') {
                                           e.preventDefault();
                                           setInputArray(Array.from({length: Number(e.target.value)}, () => Math.floor(Math.random() * 70) + 1).join(','));
                                       }
                                   }} placeholder={"100"}>
                            </input>
                        </div>
                    </div>
                    <div className={"sampleInput arrayButtonDiv"}>
                        <input id={"inputArray"} className={"inputBox"} type="text" value={inputArray}
                               onChange={handleInputArrayChange} placeholder={"1,2,3,4,5,6"}/>
                        <button className={"inputButton"} onClick={handleSubmit}><FontAwesomeIcon icon={faSearch}/>
                        </button>
                    </div>

                </div>
            </div>
            Correct numbers: <b>{correctLength} {arrayLength ? '/' : ''} {arrayLength}</b>
            <div id={"bars"} style={{gap:arrayLength > 20 ? '5px' : ''}}>
                {boxesArray.map((bar, index) =>
                    <div key={bar.id} className="bar-container">
                        <div className={`bar ${correctLength === boxesArray.length ? 'mid' : ''} ${currentCorrect.includes(bar.value) ? 'mid' : 'within'} `} style={{height: `${bar.value * 3}px`, width: arrayLength > 20 ? '10px' : '', borderRadius:arrayLength > 20 ? '3px' : '' }}></div>
                        <div className="bar-value">{bar.value}</div>
                    </div>
                )}
            </div>
        </>
    );
}

export default QuickSort

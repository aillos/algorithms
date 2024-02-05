import Modal from 'react-bootstrap/Modal';
import 'prismjs';
import 'prism-themes/themes/prism-xonokai.css';
import {useEffect} from "react";
import Prism from 'prismjs';

function JavascriptCodeModal( {show , onHide} ) {
    useEffect(() => {
        Prism.highlightAll();
    }, [show]);

    return (
        <>
            <Modal
                show={show}
                onHide={onHide}
                centered
                keyboard={false}

            >
                <Modal.Header closeButton className="code-modal" closeVariant={"white"}>
                    <Modal.Title>Example code for Javascript</Modal.Title>
                </Modal.Header>
                <Modal.Body className="code-modal">
         <pre>
            <code className="language-javascript">
    {`
const slidingWindow = (arr, x) => {
    let maxSum = 0;
    for (let i = 0; i < x; i++)
        maxSum += arr[i];
        
    let windowSum = maxSum;
    for (let i = x; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - x];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}
        `}
                </code>
        </pre>
                </Modal.Body>
                <Modal.Footer className="code-modal">
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default JavascriptCodeModal;
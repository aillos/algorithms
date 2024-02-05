import Modal from 'react-bootstrap/Modal';
import 'prismjs';
import {useEffect} from "react";
import Prism from 'prismjs';
import 'prism-themes/themes/prism-one-dark.css';
import 'prismjs/components/prism-python';

function PythonCodeModal( {show , onHide} ) {
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
                    <Modal.Title>Example code for Python</Modal.Title>
                </Modal.Header>
                <Modal.Body className="code-modal">
         <pre>
            <code className="language-python">
    {`
def slidingWindow(arr, x):
    maxSum = 0
    for i in range(x):
        maxSum += arr[i]
    windowSum = maxSum
    for i in range(x, len(arr)):
        windowSum += arr[i] - arr[i - x]
        maxSum = max(maxSum, windowSum)
    return maxSum
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

export default PythonCodeModal
import Modal from 'react-bootstrap/Modal';
import 'prismjs';
import {useEffect} from "react";
import Prism from 'prismjs';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';

function CppCodeModal( {show , onHide} ) {
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
                    <Modal.Title>Example code for C++</Modal.Title>
                </Modal.Header>
                <Modal.Body className="code-modal">
         <pre>
            <code className="language-cpp">
    {`
int slidingWindow(int arr[], int x)
{
    int maxSum = 0;
    for (int i = 0; i < x; i++)
        maxSum += arr[i];
    int windowSum = maxSum;
    for (int i = x; i < arr.length; i++)
    {
        windowSum += arr[i] - arr[i - x];
        maxSum = max(maxSum, windowSum);
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

export default CppCodeModal
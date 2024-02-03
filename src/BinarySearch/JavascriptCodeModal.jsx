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
const BinarySearch = (arr, x) => {
        let start = 0;
        let end = arr.length - 1;
        while (start <= end) {
        let mid = Math.floor((start + end) / 2);
            if (arr[mid] === x) {
                return mid;
            } else if (arr[mid] < x) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    return -1;
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
import Modal from 'react-bootstrap/Modal';
import 'prismjs';
import {useEffect} from "react";
import Prism from 'prismjs';
import 'prismjs/components/prism-java';

function JavaCodeModal( {show , onHide} ) {
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
                    <Modal.Title>Example code for Java</Modal.Title>
                </Modal.Header>
                <Modal.Body className="code-modal">
         <pre>
            <code className="language-java">
    {`
private int binarySearch (int arr[], int x) {
        int start = 0;
        int end = arr.length - 1;
        while (start <= end) {
        int mid = start + (end - start) / 2;
            if (arr[mid] == x) {
                return mid;
            }
            if (arr[mid] < x) {
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
            </Modal>
        </>
    );
}

export default JavaCodeModal
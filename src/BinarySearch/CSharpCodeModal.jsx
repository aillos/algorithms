import Modal from 'react-bootstrap/Modal';
import 'prismjs';
import {useEffect} from "react";
import Prism from 'prismjs';
import 'prismjs/components/prism-csharp';

function CSharpCodeModal( {show , onHide} ) {
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
                    <Modal.Title>Example code for C#</Modal.Title>
                </Modal.Header>
                <Modal.Body className="code-modal">
         <pre>
            <code className="language-csharp">
    {`
int BinarySearch(int[] arr, int x) {
    int start = 0;
    int end = arr.Length - 1;
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
                <Modal.Footer className="code-modal">
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CSharpCodeModal
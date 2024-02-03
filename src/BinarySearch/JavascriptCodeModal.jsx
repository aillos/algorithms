import {Modal} from "react-bootstrap";

function JavascriptCodeModal( {show , close} ) {
    return (
        <>
            <Modal
                show={show}
                onHide={close}
                backdrop="static"
                centered
                keyboard={false}
                className={"liveModal"}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Code example of Binary Search in Javascript</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <pre>
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
                    </pre>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default JavascriptCodeModal;
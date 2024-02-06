import { useState, useEffect } from "react";
import Prism from 'prismjs';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prism-themes/themes/prism-one-dark.css';
import Modal from 'react-bootstrap/Modal';

function CodeModal({ show, onHide, code, language }) {
    const languageToString = new Map([
        ["C++", "cpp"],
        ["Java", "java"],
        ["C#", "csharp"],
        ["Javascript", "javascript"],
        ["Python", "python"],
    ]);

    const [highlightedCode, setHighlightedCode] = useState('');

    useEffect(() => {
        const languageString = languageToString.get(language);
        const newHighlightedCode = Prism.highlight(code, Prism.languages[languageString], languageString);
        setHighlightedCode(newHighlightedCode);
    }, [code, language]);

    return (
        <>
            <Modal
                show={show}
                onHide={onHide}
                centered
                keyboard={false}
            >
                <Modal.Header closeButton className="code-modal" closeVariant={"white"}>
                    <Modal.Title>Example code for {language}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="code-modal">
                    <pre>
                        <code className={`language-${languageToString.get(`${language}`)}`} dangerouslySetInnerHTML={{ __html: highlightedCode }}>
                        </code>
                    </pre>
                </Modal.Body>
                <Modal.Footer className="code-modal">
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CodeModal;
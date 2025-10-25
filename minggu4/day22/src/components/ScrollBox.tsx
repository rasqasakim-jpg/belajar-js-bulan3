import React, {useRef} from "react";

const ScrollBox: React.FC = () => {
    const boxRef = useRef<HTMLInputElement>(null);

    const handleScroll = () => {
        boxRef.current?.scrollTo({
            top: boxRef.current.scrollHeight,
            behavior: "smooth",
        });
    };

    return (
        <div>
            <h2>useRef: scroll box</h2>

            <div
            ref={boxRef}
            style={{
                width: "250px",
                height: "150px",
                margin: "auto",
                border: "1px solid #aaa",
                overflowY: "auto",
                padding: "8px",
            }}
            >
            {[...Array(100)].map((_, i) => (
                <p key={i}>item ke{i + 1}</p>
            ))}
            </div>

            <button onClick={handleScroll} style={{marginTop: "10px"}}>
                scroll ke bawah
            </button>
        </div>
    );
};

export default ScrollBox;
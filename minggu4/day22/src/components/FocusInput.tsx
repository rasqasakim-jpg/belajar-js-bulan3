import React, { useRef } from "react";

const FocusInput: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFocus = () => {
        inputRef.current?.focus();
    };

    return (
        <div>
            <h2>useRef: fokus input</h2>
            <input 
            ref={inputRef}
            type="text" 
            placeholder="ketik sesuatu..."
            style={{padding: "8px", width: "200px"}}
            />
            <br />
            <button onClick={handleFocus} style={{marginTop: "10px"}}>
                Fokus ke input
            </button>
        </div>
    );
};

export default FocusInput;
import React, {useState} from "react";
import SiblingA from "./SiblingA";
import SiblingB from "./SiblingB";

export default function Parent() {
    const [text, setText] = useState("");

    return (
        <div style={{border: "2px solid black", padding: "20px"}}>
            <h2>Parent Component</h2>
            <SiblingA setText={setText} />
            <SiblingB text={text} />
        </div>
    )
}

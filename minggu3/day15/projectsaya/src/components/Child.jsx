import React from "react";

function Child({ name }) {
    console.log("Child component rendered");
    return (
        <div>
            <h2>Nama user: {name}</h2>
        </div>
    );
}

export default React.memo(Child);

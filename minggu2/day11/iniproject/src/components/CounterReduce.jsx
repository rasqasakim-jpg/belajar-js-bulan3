import React, { useReducer } from "react";

function counterReducer(state, action) {
    switch (action.type) {
        case "increment":
            return {count: state.count + 1};
        case "decrement":
            return {count: state.count - 1};
        case "reset":
            return {count: 0};
        default:
            return state;
    }
}

export default function CounterReducer() {
    const [state, dispatch] = useReducer(counterReducer, {count: 0});

    return (
        <div style={{textAlign: "center", marginTop: "20px"}}>
            <h2>Counter dengan useReducer</h2>
            <h1>{state.count}</h1>

            <button onClick={() => dispatch({type: "increment"})}>Tambah</button>
            <button onClick={() => dispatch({type: "decrement"})}>Kurang</button>
            <button onClick={() => dispatch({type: "reset"})}>Reset</button>
        </div>
    );
}

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { addTodo, deleteTodo, toggleTodo } from "../features/counter/todoSlice";

export default function TodoList() {
    const [text, setText] = useState("");
    const todos = useSelector((state: RootState) => state.todos.todos);
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (text.trim()) {
            dispatch(addTodo(text));
            setText("");
        }
    };

    return (
        <div>
            <h2>Todo List</h2>
            <div>
                <input 
                type="text" 
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add todo..."
                />
                <button onClick={handleAdd}>Add</button>
            </div>

            <ul style={{listStyle: "none", padding: 0, marginTop: "1rem"}}>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span
                        onClick={() => dispatch(toggleTodo(todo.id))}
                        >
                          {todo.text}
                        </span>
                        <button onClick={() => dispatch(deleteTodo(todo.id))}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

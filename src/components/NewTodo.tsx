import React, { useRef } from "react";
import './NewTodo.css';

type NewTodoProps = {
    onAddTodo: (todoTitle: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = props => {

    const titleInputRef = useRef<HTMLInputElement>(null);

    const submitNewTodo = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredTitle = titleInputRef.current!.value;
        console.log(enteredTitle);
        // forward entered text
        props.onAddTodo(enteredTitle);
    } 

    return (
    <form onSubmit={submitNewTodo}>
        <div>
            <label htmlFor='todo-title'>Todo title</label>
            <input type="text" id="todo-title" ref={titleInputRef} />
        </div>
        <button type="submit">Add Todo</button>
    </form>
    );
}

export default NewTodo;
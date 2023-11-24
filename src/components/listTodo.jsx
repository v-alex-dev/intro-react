import PropTypes from "prop-types";
import {useEffect, useRef, useState} from "react";

const DisplayList = ({todos, setTodos}) => {

    const inputCheckRef = useRef();
    const inputDelRef = useRef();

    const handleChecked = (id) =>{
        const newTodos = [...todos]; // Create a shallow copy of todos
        newTodos[id].completed = !newTodos[id].completed;
        setTodos(newTodos);
    }

    const handleDel = (event) =>{
        event.preventDefault();
        const newTodos = todos.filter((value) => !value.completed);
        setTodos(newTodos);

    }

    return (
        <>
            <form>
                <h2 className={"font-bold text-3xl"}>Todos</h2>
                {todos.map((value, index) => (
                    <div className={"mx-auto flex flex-col justify-center md:mx-0"} key={index}>
                        <div className={"flex mt-4 md:mx-0 "}>
                            <input
                                ref={inputCheckRef}
                                onClick={() =>handleChecked(index)}
                                checked={!!value.completed}
                                type={"checkbox"}
                                className={"w-5 mr-4"}/>
                            <p>{value.text}</p>
                        </div>
                    </div>
                ))}
                <input className={"px-4 mt-4 font-bold rounded bg-blue-500 text-amber-50"}
                       type={"submit"}
                       onClick={handleDel} value={"Delete"}/>
            </form>
        </>

    )

}
DisplayList.propTypes = {
    todos: PropTypes.array.isRequired,
};

export default DisplayList;
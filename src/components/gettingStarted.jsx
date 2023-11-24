import DisplayList from "./listTodo.jsx";
import {useEffect, useRef, useState} from "react";


const GettingStarted = () => {
    const [todo, setTodo] = useState(() => {
        const storedTodos = JSON.parse(window.localStorage.getItem("todos"));
        return storedTodos || [];
    });
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const addTodo = inputRef.current;
        setTodo([...todo, {text:addTodo.value, completed:false}]);
        addTodo.value = "";
    }

    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todo))
    }, [todo])


    return(
      <>
          <section className={"mx-auto w-3/4 flex justify-center border-b-2 pb-4 md:justify-start"}>
              <form className={"flex flex-col w-52 justify-center"} onSubmit={handleSubmit}>
                  <input ref={inputRef} className={"rounded px-2 mb-5 shadow"} type={"text"} placeholder={"Type a new todo"}
                         id={"inputTodo"}/>
                  <input className={"rounded bg-blue-500 font-bold text-amber-50"} type={"submit"} id={"addTodo"}/>
              </form>
          </section>
          <section className={"flex flex-col mx-auto w-3/4"}>
              <DisplayList todos={todo} setTodos={setTodo}/>
          </section>
      </>
  )
}

export default GettingStarted;
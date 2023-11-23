import DisplayList from "./listTodo.jsx";
import {useState} from "react";

const GettingStarted = () => {
    const [todo, setTodo] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        const addTodo = document.getElementById("inputTodo");
        setTodo([...todo, addTodo.value]);
        addTodo.value = "";
    }


    return(
      <>
          <section className={"mx-auto w-3/4 flex justify-center border-b-2 pb-4 md:justify-start"}>
              <form className={"flex flex-col w-52 justify-center"} onSubmit={handleSubmit}>
                  <input className={"rounded px-2 mb-5 shadow"} type={"text"} placeholder={"Type a new todo"}
                         id={"inputTodo"}/>
                  <input className={"rounded bg-blue-500 font-bold text-amber-50"} type={"submit"} id={"addTodo"}/>
              </form>
          </section>
          <section className={"flex flex-col mx-auto w-3/4"}>
              <DisplayList todo={todo}/>
          </section>
      </>
  )
}

export default GettingStarted;
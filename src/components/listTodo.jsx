import PropTypes from "prop-types";
import {useRef} from "react";

const DisplayList = (props) => {

    const inputRef = useRef();
    const divRef = useRef();
    const handleToggle = () => {
      console.log(divRef.current)
    }
    const handleDelete = (e) => {
        e.preventDefault();

    }

    return (
        <>
            <form>
                <h2>Todos</h2>
                {props.todo.map((value, index) => (
                    <div className={"mx-auto flex flex-col justify-center md:mx-0"} ref={divRef} key={index}>
                        <div  className={"flex mt-4 md:mx-0 "}>
                            <input ref={inputRef} type={"checkbox"} className={"w-5 mr-4"} onClick={handleToggle} key={index}/>
                            <p>{value.text}</p>
                        </div>
                    </div>
                ))}
                <input className={"bg-blue-500 py-1 px-8 rounded font-bold text-amber-50 mt-10"} onClick={handleDelete}  type={"submit"} value={"Delete"}/>
            </form>

        </>

    )


}
DisplayList.propTypes = {
    todo: PropTypes.array.isRequired,
};
export default DisplayList;
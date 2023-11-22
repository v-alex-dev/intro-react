import PropTypes from "prop-types";

const DisplayList = (props) => {

    return (
        <>
            <h2>Todos</h2>
            {props.todo.map((value, index) => (
            <div className={"mx-auto flex flex-col justify-center md:mx-0"} key={index}>
                <div  className={"flex mt-4 md:mx-0 "}>
                    <input type={"checkbox"} className={"w-5 mr-4"}/>
                    <p>{value}</p>
                </div>
            </div>
            ))}
        </>

    )


}
DisplayList.propTypes = {
    todo: PropTypes.array.isRequired
};
export default DisplayList;
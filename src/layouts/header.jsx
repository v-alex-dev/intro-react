import {NavLink, Outlet} from "react-router-dom";
import {useState} from "react";

const Header = () => {
    const [linkClass, setLinkClass] = useState("p-1 m-4 border-b-2 border-b-blue-500")
    return (
        <>
            <header className={"h-32 bg-gray-50 border-b-2 flex flex-col  justify-center items-center"}>
                <h1 className={"text-5xl font-bold"}>My Todo App</h1>
                <nav className={"flex justify-around"}>
                    <NavLink className={linkClass} to={"/"}>Home</NavLink>
                    <NavLink className={linkClass} to={"/gettingStarted"}>Getting-Started</NavLink>
                    <NavLink className={linkClass} to={"/Calendar"}>Calendar</NavLink>
                </nav>
            </header>
            <main className={"min-h-screen mt-32"}>
                <Outlet/>
            </main>
        </>

    )
}

export default  Header;
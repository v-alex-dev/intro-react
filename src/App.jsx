import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';

import Header from "./layouts/header.jsx";
import Footer from "./layouts/footer.jsx";
import GettingStarted from "./components/gettingStarted.jsx";
import Error404 from "./errors/404.jsx";
import Home from "./components/home.jsx";
import ReactCalendar from "./components/calendar.jsx";

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <>
                    <Header/>
                    <Outlet/>
                </>
            ),
            errorElement:<Error404/>,
            children: [
                {
                    index: true,
                    element: <Home/>,
                },
                {
                    path: 'gettingStarted',
                    element: <GettingStarted/>
                },
                {
                    path:'calendar',
                    element: <ReactCalendar/>
                }
            ]
        }
    ])


    return (
        <>
            <RouterProvider router={router}/>
            <Footer/>
        </>
    )
}

export default App

import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';

import Header from "./layouts/header.jsx";
import Footer from "./layouts/footer.jsx";
import GettingStarted from "./components/gettingStarted.jsx";
import Error404 from "./errors/404.jsx";

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Header><Outlet/></Header>,
            errorElement:<Error404/>,
            children: [
                {
                    path: 'gettingStarted',
                    element: <GettingStarted/>
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

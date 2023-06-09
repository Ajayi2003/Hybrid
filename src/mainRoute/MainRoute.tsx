import {createBrowserRouter} from "react-router-dom"
import Layout from "../Components/common/Layout"
import Home from "../pages/Home"


export const MainRoute = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>
            }
        ]
    }
])
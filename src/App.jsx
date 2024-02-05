import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BinarySearch from "./BinarySearch/BinarySearch.jsx";
import Home from "./Home.jsx";
import SlidingWindow from "./SlidingWindow/SlidingWindow.jsx";

function App() {
    const router = createBrowserRouter([
        {
            path: "/binary-search",
            element: <BinarySearch />,
        },
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/sliding-window",
            element: <SlidingWindow />,
        },
    ]);

    return (
        <div className="app-container">
            <RouterProvider router={router} />
        </div>
    );
}

export default App

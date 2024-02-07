import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BinarySearch from "./BinarySearch/BinarySearch.jsx";
import Home from "./Home.jsx";
import SlidingWindow from "./SlidingWindow/SlidingWindow.jsx";
import BubbleSort from "./BubbleSort/BubbleSort.jsx";
import QuickSort from "./QuickSort/QuickSort.jsx";

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
        {
            path: "/bubble-sort",
            element: <BubbleSort />,
        },
        {
            path: "/quick-sort",
            element: <QuickSort />,
        },
    ]);

    return (
        <div className="app-container">
            <RouterProvider router={router} />
        </div>
    );
}

export default App

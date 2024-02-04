import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BinarySearch from "./BinarySearch/BinarySearch.jsx";
import Home from "./Home.jsx";

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
    ]);

    return (
        <div className="app-container">
            <RouterProvider router={router} />
        </div>
    );
}

export default App

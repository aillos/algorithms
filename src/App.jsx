import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BinarySearchVisual from "./BinarySearch/BinarySearchVisual.jsx";

function App() {
    const router = createBrowserRouter([
        {
            path: "/binary-search",
            element: <BinarySearchVisual />,
        },
    ]);

    return (
        <div className="app-container">
            <RouterProvider router={router} />
        </div>
    );
}

export default App

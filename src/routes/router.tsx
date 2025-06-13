import { App } from "../App";
import { createBrowserRouter } from "react-router";

//Pages
import { Dashboard } from "../pages/dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: (
                    <Dashboard />
                )
            }
        ]
    }
]);
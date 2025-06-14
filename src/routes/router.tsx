import { App } from "../App";
import { createBrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from '../store';

//Pages
import { Dashboard } from "../pages/dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Provider store={store}>
                <App />
            </Provider>
        ),
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
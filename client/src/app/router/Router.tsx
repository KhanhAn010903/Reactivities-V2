import { createBrowserRouter, Navigate } from "react-router";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetail from "../../features/activities/details/ActivityDetailPage";
import NotFound from "../../features/errors/NotFound";
import ServerError from "../../features/errors/ServerError";
import LoginForm from "../../features/account/LoginForm";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        children : [
            {path : '' , element : <HomePage/>},
            {path : 'activities' , element : <ActivityDashboard/>},
            {path : 'activities/:id' , element : <ActivityDetail/>},
            {path : 'createActivity' , element : <ActivityForm key={'create'}/>},
            {path : 'manage/:id' , element : <ActivityForm/>},
            {path : 'not-found' , element : <NotFound/>},
            {path : 'server-error' , element : <ServerError/>},
            {path : 'login', element: <LoginForm/>},
            {path : '*' , element : <Navigate replace to={'/not-found'}/>}
        ]
    }
])
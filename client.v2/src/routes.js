import Admin from "./pages/Admin";
import Lk from "./pages/Lk";
import Main from "./pages/Main";
import Auth from './pages/Auth';
import Pay from "./pages/Pay";
import Success from "./pages/Success";
import { ADMIN_ROUTE, LK_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, PAY_ROUTE, REGISTRATION_ROUTE, SUCCESS_ROUTE } from "./utils/consts";


// пути для авторизованных пользователей
export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: LK_ROUTE,
        Component: Lk
    },
    
]

// пути для всех 
export const publicRoutes = [
    // в зависимости от компонента будет логин/регистр.
    // что здесь компонент? page на которую мы перебросимся?
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    // д.б. в authRoutes
    {
        path: PAY_ROUTE,
        Component: Pay
    },
    {
        path: SUCCESS_ROUTE,
        Component: Success
    }
]
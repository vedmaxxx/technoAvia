import React, { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes';
import { Context } from '../index';

// AppRouter узнает, куда клиент хочет попасть (url) и 
// ставит в соответствие с URL-ом такое-то отображение компонента
const AppRouter = () => {
    const {user} = useContext(Context)
    
    return (
        // если пользователь авторизован и выбран путь из authRoutes, то отрисовываем его
        // иначе отрисовываем публичные 
        <Routes>
            {user.isAuth && authRoutes.map(({path,Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {
                publicRoutes.map(({path,Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {/* В случае, если в адресной строке что-то типа http://localhost:3000/dasfaasf*/}
            {/* он перебросит нас на маршрут http://localhost:3000 */}
            <Route 
                path="*" 
                element={<Navigate to="/" replace />}
            />
        </Routes>
    );
};

export default AppRouter;
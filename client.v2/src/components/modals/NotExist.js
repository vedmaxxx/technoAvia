import React from 'react';

const NotExist = () => {
    // отсюда подгружать OrderStore
    return (
        <div>
            <h2>Упс!</h2>
            <h5>Тура для данного маршрута в данный момент не существует.</h5>
        </div>
        
    );
};

export default NotExist;
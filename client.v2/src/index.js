import React, {createContext} from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import UserStore from './site/UserStore';
import TrailStore from './site/TrailStore';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap-grid.css';
// import { AppContextProvider } from './components/AppContext.js'

// Контекст разработан для передачи данных, которые можно 
// назвать «глобальными» для всего дерева React-компонентов
export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        trail: new TrailStore()
    }}>

        <App />
    </Context.Provider>,
    document.getElementById('root')
);
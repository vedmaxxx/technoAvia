import React, {createContext} from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import UserStore from './site/UserStore';
import TrailStore from './site/TrailStore';
import TechnicStore from './site/TechnicStore';
import TourStore from './site/TourStore';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap-grid.css';
// import { AppContextProvider } from './components/AppContext.js'

// Контекст разработан для передачи данных, которые можно 
// назвать «глобальными» для всего дерева React-компонентов
export const Context = createContext(null)
console.log(process.env.REACT_APP_API_URL)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        trail: new TrailStore(),
        technic: new TechnicStore(),
        tour: new TourStore(),
    }}>
        
        <App />
    </Context.Provider>,
    document.getElementById('root')
);
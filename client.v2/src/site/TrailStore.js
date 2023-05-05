import {makeAutoObservable} from 'mobx'
// страница маршрутов


// взаимодействие с mobx, хранение данных
// _isAuth - _ означает, что переменная неизменяема
export default class UserStore {
    constructor() {
        // переключатель, авторизован ли пользователь
        this._trails = [
            {id: 1, name: 'маршрут1', description: 'ебнесся че за маршрут', trailtime: '4', image:''},
            {id: 2, name: 'маршрут2', description: 'ебАНУТЬСЯ че за маршрут', trailtime: '2', image:''}
        ]
        makeAutoObservable(this)
    }

    setTrails(trails) {
        this._trails = trails
    }
    
    getTrails() {
        return this._trails
    }
}
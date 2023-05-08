import {makeAutoObservable} from 'mobx'
// страница маршрутов

// взаимодействие с mobx, хранение данных
export default class TrailStore {
   
    constructor() {
        // переключатель, авторизован ли пользователь
        
        this._trails = [
            {id: 1, name: 'маршрут1', description: 'aes че за маршрут', trailtime: '4', image:'https://i.pinimg.com/736x/1f/32/de/1f32de75ae0a1ac218a902f6f361a6d7.jpg'},
            {id: 2, name: 'маршрут2', description: 'dfe че за маршрут', trailtime: '2', image:'https://i.pinimg.com/736x/1f/32/de/1f32de75ae0a1ac218a902f6f361a6d7.jpg'},
            {id: 3, name: 'ae', description: 'aes че за маршрут', trailtime: '4', image:'https://i.pinimg.com/736x/1f/32/de/1f32de75ae0a1ac218a902f6f361a6d7.jpg'},
            {id: 4, name: '4', description: 'dfe че за маршрут', trailtime: '2', image:'https://i.pinimg.com/736x/1f/32/de/1f32de75ae0a1ac218a902f6f361a6d7.jpg'},
        ]
        makeAutoObservable(this)
    }

    setTrails(trails) {
        this._trails = trails
    }
    
    get trails() {
        return this._trails
    }
}
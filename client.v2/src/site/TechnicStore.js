import {makeAutoObservable} from 'mobx'
// страница маршрутов

// взаимодействие с mobx, хранение данных
export default class TechnicStore {
   
    constructor() {
        this._technics = [
            {id: 1, 
            name: 'Су-27', 
            contain: 5,
            maxTimeOn: 3, 
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Nassau_County_Police_Bell_407.jpg/1200px-Nassau_County_Police_Bell_407.jpg'},
            {id: 2, 
            name: 'Су-29', 
            contain: 12,
            maxTimeOn: 3, 
            image:'../images/helicopters/sponsor-06.jpg'},
            {id: 3, 
            name: 'МиГ-27', 
            contain: 3,
            maxTimeOn: 3, 
            image:'../images/helicopters/sponsor-07.jpg'},
        ]
        makeAutoObservable(this)
    }

    setTechnics(technics) {
        this._technics = technics
    }
    
    get technics() {
        return this._technics
    }
}
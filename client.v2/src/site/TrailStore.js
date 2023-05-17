import {makeAutoObservable} from 'mobx'
// страница маршрутов

// взаимодействие с mobx, хранение данных
export default class TrailStore {
   
    // price - заглушечная цена, должна быть в Order
    constructor() {
        this._trails = []
        this._selectedTrail = {}
        makeAutoObservable(this)
    }

    setSelectedTrail(trail) {
        this._selectedTrail = trail
    }
    setTrails(trails) {
        this._trails = trails
    }
    
    get trails() {
        return this._trails
    }
    get selectedTrail() {
        return this._selectedTrail
    }
}
import {makeAutoObservable} from 'mobx'
// страница маршрутов


// НЕРАБОЧИЙ
// взаимодействие с mobx, хранение данных
export default class OrderStore {
   
    constructor() {
        this._orders = [
            {id: 1, 
            trailId: 1, 
            trailName: 'Агидель',
            technicId: 1,
            technicName: 'Су-27',
            technicContain: 4, 
            price: 15000},
        ]
        makeAutoObservable(this)
    }

    setOrders(orders) {
        this._orders = orders
    }

    // get order() {
    //     return this._orders[1]
    // }
    
    get orders() {
        return this._orders
    }
}
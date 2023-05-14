import {makeAutoObservable} from 'mobx'
// страница маршрутов


// НЕРАБОЧИЙ
// взаимодействие с mobx, хранение данных
export default class OrderStore {
   
    constructor() {
        this._orders = [
            {id: 1, 
            tourId: 1, 
            userId: 'Агидель',
            status: 1,
            comment: 'Су-27',
            datetimetogo: 4},
        ]
        makeAutoObservable(this)
    }

    setOrders(orders) {
        this._orders = orders
    }

    get orders() {
        return this._orders
    }
}
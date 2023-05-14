import {makeAutoObservable} from 'mobx'
import trailStore from './TrailStore.js'
import technicStore from './TechnicStore.js'
// страница техники(вертолетов)

// взаимодействие с mobx, хранение данных
export default class TourStore {
    constructor() {
        this._tours = [
            {id: 1, 
            // к маршруту прикреплен тур, т.е. к маршруту Агидель прикреплено 1-2 тура с разным названием и разными вертолетами
            trailId: 1,
            technicId: 2,
            name: 'Экспедиция по Белой', 
            address: 'ул. Российская 66а', 
            price: '16000',
            flighttime: 160,
            numberofpeople: 4,
            },
            {id: 2, 
            trailId: 1,
            technicId: 3,
            name: 'Летный обзор', 
            address: 'ddd', 
            price: '24000',
            flighttime: 40,
            numberofpeople: 4,
            },
            {id: 3, 
            trailId: 2,
            technicId: 1,
            name: 'Восхождение на шиханы', 
            address: 'красная', 
            price: '10000',
            flighttime: 4,
            numberofpeople: 4,
            },
        ]
        this._selectedTour={}
        makeAutoObservable(this)
    }

    setTours(tours) {
        this._tours = tours
    }
    setSelectedTour(tour) {
        this._selectedTour = tour
    }

    get tours() {
        return this._tours
    }
    get selectedTour() {
        return this._selectedTour
    }
}
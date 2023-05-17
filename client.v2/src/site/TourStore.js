import {makeAutoObservable} from 'mobx'
// страница техники(вертолетов)

// взаимодействие с mobx, хранение данных
export default class TourStore {
    constructor() {
        this._tours = []
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
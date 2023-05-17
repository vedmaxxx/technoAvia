import {makeAutoObservable} from 'mobx'
// страница техники(вертолетов)

// взаимодействие с mobx, хранение данных
export default class TechnicStore {
   
    constructor() {
        this._technics = []
        this._selectedTechnic={}
        makeAutoObservable(this)
    }

    setTechnics(technics) {
        this._technics = technics
    }
    setSelectedTechnic(technic) {
        this._selectedTechnic = technic
    }

    get technics() {
        return this._technics
    }
    get selectedTechnic() {
        return this._selectedTechnic
    }
}
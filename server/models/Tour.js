import { Tour as TourMapping } from './mapping.js'
import { Trail as TrailMapping } from './mapping.js'
import { Technic as TechnicMapping } from './mapping.js'
import FileService from '../services/File.js'
import AppError from '../errors/AppError.js'

class Tour {
    async getAll() {
        const tours = await TourMapping.findAll()
        return tours
    }

    async getOne(id) {
        const tour = await TourMapping.findByPk(id)
        if (!tour) {
            throw new Error('Тур не найден в БД')
        }
        return tour
    }

    async create(data) {
        // поскольку image не допускает null, задаем пустую строку
        const {name, adress, price,flighttime,numberofpeople,technicId,trailId} = data
        const check = await TourMapping.findOne({where:{name}})
        if (check){
            throw new Error('Тур уже существует')
        }
        const created = await TourMapping.create({name, adress, price,flighttime,numberofpeople,technicId, trailId})
        return created
    }

    async update(id, data) {
        const Tour = await TourMapping.findByPk(id)
        if (!Tour) {
            throw new Error('Тур не найден в БД')
        }
        
        // подготавливаем данные, которые надо обновить в базе данных
        const {
            name = Tour.name,
            adress = Tour.adress,
            price = Tour.price,
            flighttime = Tour.flighttime,
            numberofpeople = Tour.numberofpeople,
            technicId = Tour.technicId,
            trailId = Tour.trailId,
        } = data
        await Tour.update({name,adress, price,flighttime,numberofpeople,technicId, trailId})
        // обновим объект Тура, чтобы вернуть свежие данные
        await Tour.reload()
        return Tour
    }

    async delete(id) {
        const Tour = await TourMapping.findByPk(id)
        if (!Tour) {
            throw new Error('Тур не найден в БД')
        }
        await Tour.destroy()
        return Tour
    }


}

export default new Tour()
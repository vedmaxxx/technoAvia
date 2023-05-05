import TourModel from '../models/Tour.js'
import AppError from '../errors/AppError.js'

class Tour {
    
    async getAll(req, res, next) {
        try {
            const tours = await TourModel.getAll()
            res.json(tours)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }

    async getOne(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Не указан id товара')
            }
            const Tour = await TourModel.getOne(req.params.id)
            res.json(Tour)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }

    async create(req, res, next) {
        try {
            if (Object.keys(req.body).length === 0) {
                throw new Error('Нет данных для создания')
            }
            const Tour = await TourModel.create(req.body)
            res.json(Tour)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }

    async update(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Не указан id тура')
            }
            if (Object.keys(req.body).length === 0) {
                throw new Error('Нет данных для обновления')
            }
            const Tour = await TourModel.update(req.params.id, req.body, req.files?.image)
            res.json(Tour)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }

    async delete(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Не указан id маршрута')
            }
            const Tour = await TourModel.delete(req.params.id)
            res.json(Tour)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }
}

export default new Tour()
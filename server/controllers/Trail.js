import TrailModel from '../models/Trail.js'
import AppError from '../errors/AppError.js'

class Trail {
    
    async getAll(req, res, next) {
        try {
            const trails = await TrailModel.getAll()
            res.json(trails)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }

    async getOne(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Не указан id товара')
            }
            const Trail = await TrailModel.getOne(req.params.id)
            res.json(Trail)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }

    async create(req, res, next) {
        try {
            if (Object.keys(req.body).length === 0) {
                throw new Error('Нет данных для создания')
            }
            const Trail = await TrailModel.create(req.body, req.files?.image)
            res.json(Trail)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }

    async update(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Не указан id маршрута')
            }
            if (Object.keys(req.body).length === 0) {
                throw new Error('Нет данных для обновления')
            }
            const Trail = await TrailModel.update(req.params.id, req.body, req.files?.image)
            res.json(Trail)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }

    async delete(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Не указан id маршрута')
            }
            const Trail = await TrailModel.delete(req.params.id)
            res.json(Trail)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }
}

export default new Trail()
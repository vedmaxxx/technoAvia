import TechnicModel from '../models/Technic.js'
import AppError from '../errors/AppError.js'

class Technic {
    
    async getAll(req, res, next) {
        try {
            const technics = await TechnicModel.getAll()
            res.json(technics)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }

    async getOne(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Не указан id техники')
            }
            const Technic = await TechnicModel.getOne(req.params.id)
            res.json(Technic)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }

    async create(req, res, next) {
        try {
            if (Object.keys(req.body).length === 0) {
                throw new Error('Нет данных для создания')
            }
            const Technic = await TechnicModel.create(req.body, req.files?.image)
            res.json(Technic)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }

    async update(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Не указан id техники')
            }
            if (Object.keys(req.body).length === 0) {
                throw new Error('Нет данных для обновления')
            }
            const Technic = await TechnicModel.update(req.params.id, req.body, req.files?.image)
            res.json(Technic)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }

    async delete(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Не указан id техники')
            }
            const Technic = await TechnicModel.delete(req.params.id)
            res.json(Technic)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }
}

export default new Technic()
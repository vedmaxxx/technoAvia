import UserModel from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import AppError from '../errors/AppError.js'

const makeJwt = (id, phonenumber, role) => {
    return jwt.sign(
        {id, phonenumber, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class User {
    async signup(req, res, next) {
        const {phonenumber, password, name, surname, role = 'USER'} = req.body
        try {
            if (!phonenumber || !password ||!name||!surname) {
                throw new Error('Не все поля заполнены')
            }
            if (role !== 'USER') {
                throw new Error('Возможна только роль USER')
            }
            const hash = await bcrypt.hash(password, 5)
            const user = await UserModel.create({phonenumber, password: hash,name,surname, role})
            const token = makeJwt(user.id, user.phonenumber, user.role)
            return res.json({token})
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }

    async login(req, res, next) {
        try {
            const {phonenumber, password} = req.body
            const user = await UserModel.getByPhone(phonenumber)
            let compare = bcrypt.compareSync(password, user.password)
            if (!compare) {
                throw new Error('Указан неверный пароль')
            }
            const token = makeJwt(user.id, user.phonenumber, user.role)
            return res.json({token})
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }

    async check(req, res, next) {
        const token = makeJwt(req.auth.id, req.auth.phonenumber, req.auth.role)
        return res.json({token})
    }

    async getAll(req, res, next) {
        try {
            const users = await UserModel.getAll()
            res.json(users)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }

    async getOne(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Не указан id пользователя')
            }
            const user = await UserModel.getOne(req.params.id)
            res.json(user)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }

    async create(req, res, next) {
        const {phonenumber, password,name,surname, role = 'USER'} = req.body
        try {
            if (!phonenumber || !password||!name||!surname) {
                throw new Error('Не все поля заполнены')
            }
            if ( ! ['USER', 'ADMIN'].includes(role)) {
                throw new Error('Недопустимое значение роли')
            }
            const hash = await bcrypt.hash(password, 5)
            const user = await UserModel.create({phonenumber, password: hash,name,surname, role})
            return res.json(user)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }

    async update(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Не указан id пользователя')
            }
            if (Object.keys(req.body).length === 0) {
                throw new Error('Нет данных для обновления')
            }
            let {phonenumber, password,name,surname, role} = req.body
            if (role && !['USER', 'ADMIN'].includes(role)) {
                throw new Error('Недопустимое значение роли')
            }
            if (password) {
                password = await bcrypt.hash(password, 5)
            }
            const user = await UserModel.update(req.params.id, {phonenumber, password,name,surname, role})
            res.json(user)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }

    async delete(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Не указан id пользователя')
            }
            const user = await UserModel.delete(req.params.id)
            res.json(user)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }
}

export default new User()
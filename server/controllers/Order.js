import OrderModel from '../models/Order.js'
import UserModel from '../models/User.js'
import AppError from '../errors/AppError.js'

class Order {
    adminCreate = async (req, res, next) => {
        await this.create(req, res, next, 'admin')
    }

    userCreate = async (req, res, next) => {
        await this.create(req, res, next, 'user')
    }

    // guestCreate = async (req, res, next) => {
    //     await this.create(req, res, next, 'guest')
    // }

    async create(req, res, next, type) {
        try {
            const {datetimetogo, comment = null, tourId } = req.body
            // данные для создания заказа
            if (!datetimetogo) throw new Error('Не выбрано время отправления')
            if (!tourId) throw new Error('Не выбран Тур')

            let userId = null
            if (type === 'admin') {
                // проверяем существование пользователя
                userId = req.body.userId ?? null
                // потом убрать
                if (!userId) {
                    throw new Error('userId не указан')
                }
                if (userId) {
                    await UserModel.getOne(userId) // будет исключение, если не найден
                }
            } else {
                // когда заказ делает обычный пользователь id пользователя из req.auth.id (если есть)
                userId = req.auth?.id ?? null
            }

            // все готово, можно создавать
            const order = await OrderModel.create({
                datetimetogo, comment, tourId, userId
            })
            res.json(order)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }

    async adminGetAll(req, res, next) {
        try {
            const orders = await OrderModel.getAll()
            res.json(orders)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }

    async adminGetUser(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Не указан id пользователя')
            }
            const order = await OrderModel.getAll(req.params.id)
            res.json(order)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }

    async adminGetOne(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Не указан id заказа')
            }
            const order = await OrderModel.getOne(req.params.id)
            res.json(order)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }

    async adminDelete(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Не указан id заказа')
            }
            const order = await OrderModel.delete(req.params.id)
            res.json(order)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }

    async adminUpdate(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Не указан id Заказа')
            }
            if (Object.keys(req.body).length === 0) {
                throw new Error('Нет данных для обновления')
            }
            const Order = await OrderModel.update(req.params.id, req.body)
            res.json(Order)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }

    async userGetAll(req, res, next) {
        try {
            const orders = await OrderModel.getAll(req.auth.id)
            res.json(orders)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }

    async userGetOne(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Не указан id заказа')
            }
            const order = await OrderModel.getOne(req.params.id, req.auth.id)
            res.json(order)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }
}

export default new Order()
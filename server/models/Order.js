import { Order as OrderMapping } from './mapping.js'
import { Tour as TourMapping } from './mapping.js'
import AppError from '../errors/AppError.js'

class Order {
    async getAll(userId = null) {
        const options = {}
        if (userId) {
            options.where = {userId}
        }
        const orders = await OrderMapping.findAll(options)
        return orders
    }

    async getOne(id, userId = null) {
        const options = {
            where: {id},
        }
        if (userId) options.where.userId = userId
        const order = await OrderMapping.findOne(options)
        if (!order) {
            throw new Error('Заказ не найден в БД')
        }
        return order
    }

    async create(data) {
        
        // данные для создания заказа
        const {datetimetogo, comment = null, status="WAIT", userId = null, tourId=null} = data
        const created = await OrderMapping.create({
            datetimetogo, comment, status, userId, tourId
        })
        return created
    }


    async update(id, data) {
        const order = await OrderMapping.findByPk(id)
        if (!order) {
            throw new Error('Тур не найден в БД')
        }
        
        // подготавливаем данные, которые надо обновить в базе данных
        const {
            datetimetogo = order.datetimetogo,
            comment = order.comment,
            status = "WAIT",
            userId = order.userId,
            tourId = order.tourId,
        } = data
        await order.update({datetimetogo, comment, status, userId, tourId})
        // обновим объект Тура, чтобы вернуть свежие данные
        await order.reload()
        return order
    }

    async delete(id) {
        let order = await OrderMapping.findByPk(id)
        if (!order) {
            throw new Error('Заказ не найден в БД')
        }
        await order.destroy()
        return order
    }
}

export default new Order()
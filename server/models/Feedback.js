import { Feedback as FeedbackMapping } from './mapping.js'
import { Tour as TourMapping } from './mapping.js'
import { User as UserMapping } from './mapping.js'
import AppError from '../errors/AppError.js'

class Feedback {
    async getOne(TourId) {
        const Tour = await TourMapping.findByPk(TourId)
        if (!Tour) {
            throw new Error('Маршрут не найден в БД')
        }
        const votes = await FeedbackMapping.count({where: {TourId}})
        if (votes) {
            const rates = await FeedbackMapping.sum('rate', {where: {TourId}})
            return {rates, votes, Feedback: rates/votes}
        }
        return {rates: 0, votes: 0, Feedback: 0}
    }

    async create(userId, TourId, text) {
        const Tour = await TourMapping.findByPk(TourId)
        if (!Tour) {
            throw new Error('Маршрут не найден в БД')
        }
        const user = await UserMapping.findByPk(userId)
        if (!user) {
            throw new Error('Пользователь не найден в БД')
        }
        const Feedback = await FeedbackMapping.create({userId, TourId, text})
        return Feedback
    }
}

export default new Feedback()
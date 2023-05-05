import { User as UserMapping } from './mapping.js'
import AppError from '../errors/AppError.js'

class User {
    async getAll() {
        const users = await UserMapping.findAll()
        return users
    }

    async getOne(id) {
        const user = await UserMapping.findByPk(id)
        if (!user) {
            throw new Error('Пользователь не найден в БД')
        }
        return user
    }

    async getByPhone(phonenumber) {
        const user = await UserMapping.findOne({where: {phonenumber}})
        if (!user) {
            throw new Error('Пользователь не найден в БД')
        }
        return user
    }
    

    async create(data) {
        const {phonenumber, password,name,surname, role} = data
        const check = await UserMapping.findOne({where: {phonenumber}})
        if (check) {
            throw new Error('Пользователь уже существует')
        }
        const user = await UserMapping.create({phonenumber, password,name,surname, role})
        return user
    }

    async update(id, data) {
        const user = await UserMapping.findByPk(id)
        if (!user) {
            throw new Error('Пользователь не найден в БД')
        }
        const {
            phonenumber = user.phonenumber,
            password = user.password,
            name = user.name,
            surname = user.surname,
            role = user.role
        } = data
        await user.update({phonenumber, password,name,surname, role})
        return user
    }

    async delete(id) {
        const user = await UserMapping.findByPk(id)
        if (!user) {
            throw new Error('Пользователь не найден в БД')
        }
        await user.destroy()
        return user
    }
}

export default new User()
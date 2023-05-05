import { Trail as TrailMapping } from './mapping.js'
import FileService from '../services/File.js'
import AppError from '../errors/AppError.js'

class Trail {
    async getAll() {
        const trails = await TrailMapping.findAll()
        return trails
    }

    async getOne(id) {
        const trail = await TrailMapping.findByPk(id)
        if (!trail) {
            throw new Error('Тур не найден в БД')
        }
        return trail
    }

    async create(data, img) {
        // поскольку image не допускает null, задаем пустую строку
        const image = FileService.save(img) ?? ''
        const {name, description,trailtime} = data
        const check = await TrailMapping.findOne({where: {name}})
        if (check) {
            throw new Error('Маршрут уже существует')
        }
        const created = await TrailMapping.create({name, description,trailtime, image})
        return created
    }

    async update(id, data, img) {
        const Trail = await TrailMapping.findByPk(id)
        if (!Trail) {
            throw new Error('Тур не найден в БД')
        }
        // пробуем сохранить изображение, если оно было загружено
        const file = FileService.save(img)
        // если загружено новое изображение — надо удалить старое
        if (file && Trail.image) {
            FileService.delete(Trail.image)
        }
        // подготавливаем данные, которые надо обновить в базе данных
        const {
            name = Trail.name,
            description = Trail.description,
            trailtime = Trail.trailtime,
            image = file ? file : Trail.image
        } = data
        await Trail.update({name,  description, image, trailtime})
        // обновим объект Тура, чтобы вернуть свежие данные
        await Trail.reload()
        return Trail
    }

    async delete(id) {
        const Trail = await TrailMapping.findByPk(id)
        if (!Trail) {
            throw new Error('Тур не найден в БД')
        }
        if (Trail.image) { // удаляем изображение Тура
            FileService.delete(Trail.image)
        }
        await Trail.destroy()
        return Trail
    }

    
}

export default new Trail()
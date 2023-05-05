import { Technic as TechnicMapping } from './mapping.js'
import FileService from '../services/File.js'
import AppError from '../errors/AppError.js'

class Technic {
    async getAll() {
        const technic = await TechnicMapping.findAll()
        return technic
    }

    async getOne(id) {
        const technic = await TechnicMapping.findByPk(id)
        if (!technic) {
            throw new Error('Техника не найдена в БД')
        }
        return technic
    }

    async create(data, img) {
        // поскольку image не допускает null, задаем пустую строку
        const image = FileService.save(img) ?? ''
        const {name, contain,maxtimeon} = data
        const check = await TechnicMapping.findOne({where: {name}})
        if (check) {
            throw new Error('Техника уже существует')
        }
        const created = await TechnicMapping.create({name, contain, image,maxtimeon})
        return created
    }

    async update(id, data, img) {
        const Technic = await TechnicMapping.findByPk(id)
        if (!Technic) {
            throw new Error('Техника не найдена в БД')
        }
        // пробуем сохранить изображение, если оно было загружено
        const file = FileService.save(img)
        // если загружено новое изображение — надо удалить старое
        if (file && Technic.image) {
            FileService.delete(Technic.image)
        }
        // подготавливаем данные, которые надо обновить в базе данных
        const {
            name = Technic.name,
            contain = Technic.contain,
            maxtimeon = Technic.maxtimeon,
            image = file ? file : Technic.image
        } = data
        await Technic.update({name, contain, image,maxtimeon})
        // обновим объект Техники, чтобы вернуть свежие данные
        await Technic.reload()
        return Technic
    }

    async delete(id) {
        const Technic = await TechnicMapping.findByPk(id)
        if (!Technic) {
            throw new Error('Техника не найдена в БД')
        }
        if (Technic.image) { // удаляем изображение Техники
            FileService.delete(Technic.image)
        }
        await Technic.destroy()
        return Technic
    }


}

export default new Technic()
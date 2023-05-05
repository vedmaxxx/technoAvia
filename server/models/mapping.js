import sequelize from '../sequelize.js'
import database, { DATE, DATEONLY } from 'sequelize'

const { DataTypes } = database

/*
 * Описание моделей
 */

// модель «Пользователь», таблица БД «users»
const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    phonenumber:{type: DataTypes.STRING, unique:true},
    password: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING, unique: false},
    surname:{type: DataTypes.STRING, unique: false},
    role: {type: DataTypes.STRING, defaultValue: 'USER'},
    createdat: {
        type: DataTypes.VIRTUAL,
        get() {
            const value = this.getDataValue('createdAt')
            const day = value.getDate()
            const month = value.getMonth() + 1
            const year = value.getFullYear()
            const hours = value.getHours()
            const minutes = value.getMinutes()
            return day + '.' + month + '.' + year + ' ' + hours + ':' + minutes
        }
    },
    updatedat: {
        type: DataTypes.VIRTUAL,
        get() {
            const value = this.getDataValue('updatedAt')
            const day = value.getDate()
            const month = value.getMonth() + 1
            const year = value.getFullYear()
            const hours = value.getHours()
            const minutes = value.getMinutes()
            return day + '.' + month + '.' + year + ' ' + hours + ':' + minutes
        }
    },
})

// модель «Маршрут», таблица БД «trail»
const Trail = sequelize.define('trail', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING, unique: false, allowNull: true},
    trailtime: {type: DataTypes.INTEGER,allowNull: false},
    image: {type: DataTypes.STRING},
})

// модель «Техника», таблица БД «technic»
const Technic = sequelize.define('technic', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    contain: {type: DataTypes.INTEGER},//вместимость
    image: {type: DataTypes.STRING, allowNull: false},
    maxtimeon: {type: DataTypes.INTEGER, allowNull: false},
    
})

// модель «Отзыв», таблица БД «feedback»
const Feedback = sequelize.define('feedback', {
    text: {type: DataTypes.STRING, allowNull: false},
    createdat: {
        type: DataTypes.VIRTUAL,
        get() {
            const value = this.getDataValue('createdAt')
            const day = value.getDate()
            const month = value.getMonth() + 1
            const year = value.getFullYear()
            const hours = value.getHours()
            const minutes = value.getMinutes()
            return day + '.' + month + '.' + year + ' ' + hours + ':' + minutes
        }
    },
    updatedat: {
        type: DataTypes.VIRTUAL,
        get() {
            const value = this.getDataValue('updatedAt')
            const day = value.getDate()
            const month = value.getMonth() + 1
            const year = value.getFullYear()
            const hours = value.getHours()
            const minutes = value.getMinutes()
            return day + '.' + month + '.' + year + ' ' + hours + ':' + minutes
        }
    },
})


// // модель «Тур», таблица БД «tour»
const Tour = sequelize.define('tour', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    adress: {type: DataTypes.STRING, allowNull: false},
    price:{type:DataTypes.INTEGER,allowNull:true},
    flighttime:{type:DataTypes.INTEGER,allowNull:true},
    numberofpeople:{type:DataTypes.INTEGER,allowNull:true},
    createdat: {
        type: DataTypes.VIRTUAL,
        get() {
            const value = this.getDataValue('createdAt')
            const day = value.getDate()
            const month = value.getMonth() + 1
            const year = value.getFullYear()
            const hours = value.getHours()
            const minutes = value.getMinutes()
            return day + '.' + month + '.' + year + ' ' + hours + ':' + minutes
        }
    },
    updatedat: {
        type: DataTypes.VIRTUAL,
        get() {
            const value = this.getDataValue('updatedAt')
            const day = value.getDate()
            const month = value.getMonth() + 1
            const year = value.getFullYear()
            const hours = value.getHours()
            const minutes = value.getMinutes()
            return day + '.' + month + '.' + year + ' ' + hours + ':' + minutes
        }
    },
        
})

// // модель «Заказ», таблица БД «orders»
const Order = sequelize.define('orders', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    datetimetogo: {type: DataTypes.STRING, allowNull: false},
    comment: {type: DataTypes.STRING, allowNull: true},
    status: {type: DataTypes.STRING, allowNull: false, defaultValue: "WAIT"},
    createdat: {
        type: DataTypes.VIRTUAL,
        get() {
            const value = this.getDataValue('createdAt')
            const day = value.getDate()
            const month = value.getMonth() + 1
            const year = value.getFullYear()
            const hours = value.getHours()
            const minutes = value.getMinutes()
            return day + '.' + month + '.' + year + ' ' + hours + ':' + minutes
        }
    },
    updatedat: {
        type: DataTypes.VIRTUAL,
        get() {
            const value = this.getDataValue('updatedAt')
            const day = value.getDate()
            const month = value.getMonth() + 1
            const year = value.getFullYear()
            const hours = value.getHours()
            const minutes = value.getMinutes()
            return day + '.' + month + '.' + year + ' ' + hours + ':' + minutes
        }
    },
        
})

/*
 * Описание связей
 */

// связь заказа с пользователями: у пользователя может быть несколько заказов,
// но заказ может принадлежать только одному пользователю
User.hasMany(Order, {onDelete: 'CASCADE'},{onChange: 'CASCADE'})
Order.belongsTo(User)

// связь Заказа с Турами: в заказе может быть только один тур
// каждый Тур может принадлежать нескольким Заказам
Tour.hasMany(Order, {onDelete: 'RESTRICT'},{onChange: 'RESTRICT'})
Order.belongsTo(Tour)

// связь Тура с Техникой: в Туре может быть только одина Техника
// каждая Техника может принадлежать нескольким Турам
Technic.hasMany(Tour, {onDelete: 'RESTRICT'},{onChange: 'CASCADE'})
Tour.belongsTo(Technic)

// связь Тура с маршрутами: в туре может быть только один маршрут
// каждый маршрут может принадлежать нескольким турам
Trail.hasMany(Tour, {onDelete: 'RESTRICT'},{onChange: 'CASCADE'})
Tour.belongsTo(Trail)

// super many-to-many https://sequelize.org/master/manual/advanced-many-to-many.html
// это обеспечит возможность любых include при запросах findAll, findOne, findByPk
Trail.hasMany(Feedback)
Feedback.belongsTo(Trail)
User.hasMany(Feedback)
Feedback.belongsTo(User)



export {
    User,
    Trail,
    Feedback,
    Order,
    Technic,
    Tour
}

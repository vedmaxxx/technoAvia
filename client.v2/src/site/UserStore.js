import {makeAutoObservable} from 'mobx'

// взаимодействие с mobx, хранение данных
// _isAuth - _ означает, что переменная неизменяема
export default class UserStore {
    constructor() {
        // переключатель, авторизован ли пользователь
        this._isAuth = false;
        this._user = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }

    // computed-функции
    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
}
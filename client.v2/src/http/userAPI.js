import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode"

export const registration = async (phonenumber, password, name, surname) => {
    // было 'api/user/signup'
    const {data} = await $host.post('user/signup', {phonenumber, password, name, surname})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (phonenumber, password) => {
    const {data} = await $host.post('user/login', {phonenumber, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.post('api/user/auth')
    return jwt_decode(data.token)
}
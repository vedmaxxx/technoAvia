import { $authHost, $host } from "./index";

export const registration = async (phonenumber, password, name, surname) => {
    // было 'api/user/signup'
    const response = await $host.post('user/signup', {phonenumber, password, name, surname})
    return response
}

export const login = async (phonenumber, password) => {
    const response = await $host.post('user/login', {phonenumber, password})
    return response
}

export const check = async () => {
    const response = await $host.post('api/user/registration')
    return response
}
import { $authHost, $host } from "./index";

export const registration = async (email, password) => {
    // было 'api/user/signup'
    const response = await $host.post('user/signup', {email, password, role: 'ADMIN'})
    return response
}

export const login = async (email, password) => {
    const response = await $host.post('user/login', {email, password})
    return response
}

export const check = async () => {
    const response = await $host.post('api/user/registration')
    return response
}
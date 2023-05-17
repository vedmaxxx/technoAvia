import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode"

export const createTrail = async (trail) => {
    // было 'api/user/signup'
    const {data} = await $authHost.post('trail', trail)
    return data
}

export const fetchTrails = async () => {
    const {data} = await $host.post('trail')
    return data
}
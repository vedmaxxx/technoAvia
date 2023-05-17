import { $authHost, $host } from "./index";

export const createTrail = async (trail) => {
    const {data} = await $authHost.post('trail', trail)
    return data
}

export const fetchTrails = async () => {
    const {data} = await $host.get('trail/getall')
    return data
}
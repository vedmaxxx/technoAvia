import { $authHost, $host } from "./index";

export const createTechnic = async (technic) => {
    const {data} = await $authHost.post('trail', technic)
    return data
}

export const fetchTechnics = async () => {
    const {data} = await $host.get('technic/getall')
    return data
}
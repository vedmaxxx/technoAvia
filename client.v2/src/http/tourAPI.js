import { $authHost, $host } from "./index";

export const createTour = async (tour) => {
    const {data} = await $authHost.post('trail', tour)
    return data
}

export const fetchTours = async () => {
    const {data} = await $host.get('tour/getall')
    return data
}
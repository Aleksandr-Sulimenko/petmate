import axios from 'axios'
import {Pet, PetFilters} from "@/types/pet";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

export const searchPets = async (filters: PetFilters): Promise<Pet[]> => {
    const response = await api.get<Pet[]>('/pets', { params: filters })
    return response.data
}

// Добавить другие методы API по мере необходимости
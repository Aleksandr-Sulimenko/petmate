import axios from 'axios'
import {Pet, PetFilters} from "@/types/pet";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001", // Добавляем fallback
    headers: {
        'Content-Type': 'application/json',
    },
})

export const searchPets = async (filters: PetFilters): Promise<Pet[]> => {
    try {
        console.log("Отправляю запрос на:", process.env.NEXT_PUBLIC_API_URL + '/pets', filters);
        const response = await api.get<Pet[]>('/pets', { params: filters });
        return response.data;
    } catch (error) {
        console.error("Ошибка при запросе:", error);
        throw error;
    }
};
// Добавить другие методы API по мере необходимости
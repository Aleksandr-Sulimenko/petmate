import axios from 'axios'
import {Pet, PetFilters} from "@/types/pet";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001", // Добавляем fallback
    headers: {
        'Content-Type': 'application/json',
    },
})

export const loginUser = async (credentials: { email: string; password: string }) => {
    const response = await api.post<{ access_token: string }>("/login", credentials);
    return response.data;
};

export const registerUser = async (credentials: { email: string; password: string }) => {
    const response = await api.post("/register", credentials);
    return response.data;
};

export const searchPets = async (filters: { breed: string }, token?: string) => {
    try {
        console.log("Отправляю запрос на:", process.env.NEXT_PUBLIC_API_URL + '/pets', filters);
        const response = await api.get<Pet[]>("/pets", {
            params: filters,
            headers: token ? { Authorization: `Bearer ${token}` } : {},
        });
        return response.data;
    } catch (error) {
        console.error("Ошибка при запросе:", error);
        throw error;
    }
};
// Добавить другие методы API по мере необходимости
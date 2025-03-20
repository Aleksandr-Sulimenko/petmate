"use client";
import { useEffect, useState } from "react";
import Head from 'next/head';
import { searchPets } from "@/lib/api";
import PetCard from "@/components/PetCard";
import type { Pet } from "@/types/pet";

export default function Page() {
    // const { isAuthenticated, token } = useAuth();
    // const [pets, setPets] = useState<Pet[]>([]);

    // useEffect(() => {
    //     if (isAuthenticated) {
    //         const fetchPets = async () => {
    //             try {
    //                 const response = await searchPets({ breed: "Сиамский" }, token);
    //                 setPets(response);
    //             } catch (error) {
    //                 console.error("Ошибка при получении данных:", error);
    //             }
    //         };
    //         fetchPets();
    //     }
    // }, [isAuthenticated, token]);

    return (
        <>
            <Head>
                <title>PetMate - Найдите идеального партнера для вашего питомца</title>
                <meta
                    name="description"
                    content="PetMate помогает владельцам домашних животных найти идеальных партнеров для вязки. Зарегистрируйтесь и начните поиск прямо сейчас!"
                />
            </Head>
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-primary mb-6">
                    Добро пожаловать в PetMate!
                </h1>
                <p className="text-lg text-gray-600">
                    Найдите идеального партнера для вашего питомца
                </p>
                {/*{!isAuthenticated && (*/}
                {/*    <div>*/}
                {/*        <h2 className="text-2xl font-semibold mb-4">Ваши питомцы</h2>*/}
                {/*        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">*/}
                {/*            {pets.map((pet) => (*/}
                {/*                <PetCard*/}
                {/*                    key={pet.id}*/}
                {/*                    name={pet.name}*/}
                {/*                    breed={pet.breed}*/}
                {/*                    age={pet.age}*/}
                {/*                    imageUrl={pet.images[0]}*/}
                {/*                />*/}
                {/*            ))}*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*)}*/}
            </main>
        </>

    );
}
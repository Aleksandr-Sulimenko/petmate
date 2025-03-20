"use client";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/store';
import { fetchPetsStart, fetchPetsSuccess, fetchPetsFailure } from '@/features/pets/petSlice';
import PetCard from '@/components/PetCard';
import { searchPets } from '@/lib/api';

export default function SearchPage() {
    const dispatch = useDispatch();
    const { pets, loading, error } = useSelector((state: RootState) => state.pets);
    const { token } = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        const fetchPets = async () => {
            dispatch(fetchPetsStart());
            try {
                const response = await searchPets({ breed: 'Сиамский' }, token );
                dispatch(fetchPetsSuccess(response));
            } catch (error) {
                dispatch(fetchPetsFailure((error as Error).message));
            }
        };
        fetchPets();
    }, [token, dispatch]);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error}</p>;

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-semibold mb-6">Поиск питомцев</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pets.map((pet) => (
                    <PetCard
                        key={pet.id}
                        name={pet.name}
                        breed={pet.breed}
                        age={pet.age}
                        imageUrl={pet.images[0]}
                    />
                ))}
            </div>
        </div>
    );
}
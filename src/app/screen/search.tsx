import PetCard from '@/components/PetCard'
import { searchPets } from '@/lib/api'

export default async function SearchPage() {
    const pets = await searchPets({ breed: 'Сиамский' }) // Пример фильтра

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-semibold mb-6">Поиск питомцев</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pets.map(pet => (
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
    )
}
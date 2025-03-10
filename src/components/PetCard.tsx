interface PetCardProps {
    name: string
    breed: string
    age: number
    imageUrl: string
}

export default function PetCard({ name, breed, age, imageUrl }: PetCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
                src={imageUrl}
                alt={name}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{name}</h3>
                <p className="text-gray-600">Порода: {breed}</p>
                <p className="text-gray-600">Возраст: {age} лет</p>
            </div>
        </div>
    )
}
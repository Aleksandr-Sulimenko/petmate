export interface Pet {
    id: string
    name: string
    breed: string
    age: number
    ownerId: string
    location: string
    characteristics: string[]
    images: string[]
}

export interface PetFilters {
    breed?: string
    minAge?: number
    maxAge?: number
    location?: string
}
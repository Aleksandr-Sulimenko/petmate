import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="bg-white shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link href="/public" className="text-2xl font-bold text-primary">
                        PetMate
                    </Link>

                    <div className="flex space-x-4">
                        <Link
                            href="/search"
                            className="px-3 py-2 rounded-md hover:bg-gray-100"
                        >
                            Поиск
                        </Link>
                        <Link
                            href="/login"
                            className="px-3 py-2 rounded-md bg-primary text-white hover:bg-blue-600"
                        >
                            Войти
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
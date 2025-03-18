"use client"; // Указываем, что это клиентский компонент
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Проверяем наличие токена в localStorage при загрузке компонента
    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token); // Устанавливаем true, если токен есть, иначе false
    }, []);

    return (
        <nav className="bg-white shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="text-2xl font-bold text-primary">
                        PetMate
                    </Link>

                    <div className="flex space-x-4">
                        <Link
                            href="/search"
                            className="px-3 py-2 rounded-md hover:bg-gray-100"
                        >
                            Поиск
                        </Link>
                        {isAuthenticated ? (
                            <span className="px-3 py-2 rounded-md bg-primary text-black">
                                👤 {/* Символическая иконка для авторизованного пользователя */}
                            </span>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="px-3 py-2 rounded-md bg-primary text-black border hover:bg-blue-600"
                                >
                                    Войти
                                </Link>
                                <Link
                                    href="/register"
                                    className="px-3 py-2 rounded-md bg-primary text-black border hover:bg-blue-600"
                                >
                                    Регистрация
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
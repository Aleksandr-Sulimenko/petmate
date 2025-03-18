"use client"; // Mark this file as a client component
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerUser } from '@/lib/api'; // Предполагается, что у вас есть функция для запроса к API

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await registerUser({ email, password });
            console.log('Регистрация успешна:', response);
            router.push('/'); // Переход на главную страницу
        } catch (error) {
            setError(error.response?.data?.message || 'Произошла ошибка');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4">Регистрация</h2>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 mb-3 border rounded"
                    required
                />
                <div className="relative">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 mb-3 border rounded"
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2 top-2"
                    >
                        {showPassword ? 'Скрыть' : 'Показать'}
                    </button>
                </div>
                <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
                    Зарегистрироваться
                </button>
            </form>
        </div>
    );
}
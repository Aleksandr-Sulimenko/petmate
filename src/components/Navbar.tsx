"use client";
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/store';
import { clearToken } from '@/features/auth/authSlice';

export default function Navbar() {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const dispatch = useDispatch();

    const loguot = () => {
        dispatch(clearToken());
        localStorage.removeItem('token');
    };

    return (
        <nav className="bg-white shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="text-2xl font-bold text-primary">
                        PetMate
                    </Link>
                    <div className="flex space-x-4">
                        <Link href="/search" className="px-3 py-2 rounded-md hover:bg-gray-100">
                            Поиск
                        </Link>
                        {isAuthenticated ? (
                            <>
                                <span className="px-3 py-2 rounded-md bg-primary text-white">👤</span>
                                <button
                                    onClick={loguot}
                                    className="px-3 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
                                >
                                    Выйти
                                </button>
                            </>
                        ) : (
                            <>
                                <Link href="/login" className="px-3 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">
                                    Войти
                                </Link>
                                <Link href="/register" className="px-3 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">
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
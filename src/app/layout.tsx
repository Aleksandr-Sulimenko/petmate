"use client";
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { AuthProvider } from '@/context/AuthContext';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
        <body>
        <AuthProvider>
            <Navbar />
            <main className="min-h-screen bg-gray-250">{children}</main>
        </AuthProvider>
        </body>
        </html>
    );
}
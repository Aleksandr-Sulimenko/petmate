"use client";
import { Provider } from 'react-redux';
import { store } from '@/app/store';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <Navbar />
            <main className="min-h-screen bg-gray-250">{children}</main>
        </Provider>
    );
}
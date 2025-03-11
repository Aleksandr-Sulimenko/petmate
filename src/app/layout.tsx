import Navbar from '@/components/Navbar'
import '@/styles/globals.css'

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <body>
                <Navbar />
                <main className="min-h-screen bg-gray-250">{children}</main>
            </body>
        </html>
    )
}

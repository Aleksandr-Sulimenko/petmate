import ClientLayout from "@/app/ClientLayout";

export const metadata = {
    title: "PetMate",
    description: "Добро пожаловать в PetMate",
};

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
        <body>
        <ClientLayout>{children}</ClientLayout>
        </body>
        </html>
    );
}
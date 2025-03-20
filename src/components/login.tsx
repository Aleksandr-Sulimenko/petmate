import LoginForm from './LoginForm'; // Клиентский компонент

export const generateMetadata = () => ({
    title: "PetMate - Вход",
    description: "Войдите в свой аккаунт PetMate.",
});

export default function LoginPage() {
    return <LoginForm />;
}
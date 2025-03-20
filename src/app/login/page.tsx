import LoginPage from '@/components/login';

export const generateMetadata = () => ({
    title: "PetMate - Вход",
    description: "Войдите в свой аккаунт PetMate.",
});

export default function Login() {
    return <LoginPage />;
}
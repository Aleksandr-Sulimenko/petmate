import RegisterForm from './RegisterForm'; // Клиентский компонент

export const generateMetadata = () => ({
    title: "PetMate - Регистрация",
    description: "Войдите в свой аккаунт PetMate.",
});

export default function LoginPage() {
    return <RegisterForm />;
}
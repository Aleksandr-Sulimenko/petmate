import RegisterPage from '@/components/register';

export const generateMetadata = () => ({
    title: "PetMate - Регистрация",
    description: "Войдите в свой аккаунт PetMate.",
});
export default function Register () {
    return <RegisterPage />;
}
import RegisterForm from "../components/Fragments/RegisterForm";
import AuthLayout from "../components/layouts/AuthLayout";

const RegisterPage = () => {
  return (
    <>
      <AuthLayout title="Login">
        <RegisterForm />
      </AuthLayout>
    </>
  );
};

export default RegisterPage;

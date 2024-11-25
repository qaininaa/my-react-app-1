import RegisterForm from "../components/Fragments/RegisterForm";
import AuthLayout from "../components/layouts/AuthLayout";

const RegisterPage = () => {
  return (
    <>
      <AuthLayout title="Register" type="register">
        <RegisterForm />
      </AuthLayout>
    </>
  );
};

export default RegisterPage;

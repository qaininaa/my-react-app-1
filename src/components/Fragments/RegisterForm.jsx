import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const RegisterForm = () => {
  return (
    <form action="">
      <InputForm
        type="text"
        id="fullname"
        placeholder="Alexandra"
        name="fullname"
        label="Full Name"
      />
      <InputForm
        type="email"
        id="email"
        placeholder="example@mail.com"
        name="email"
        label="Email"
      />
      <InputForm
        type="password"
        id="password"
        placeholder="*****"
        name="password"
        label="Password"
      />
      <InputForm
        type="password"
        id="confirmPassword"
        placeholder="*****"
        name="confirmPassword"
        label="Confirm Password"
      />
      <Button variant="bg-green-600">Register</Button>
    </form>
  );
};

export default RegisterForm;

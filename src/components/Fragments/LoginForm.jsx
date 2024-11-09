import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const LoginForm = () => {
  return (
    <form action="">
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
      <Button variant="bg-green-600">Login</Button>
    </form>
  );
};

export default LoginForm;

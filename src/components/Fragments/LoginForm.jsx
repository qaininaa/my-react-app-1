import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { fetchLogin } from "../../service/auth.service";
import { redirect, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    fetchLogin(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        if (localStorage.getItem("token")) {
          navigate("/products");
        } else {
          return redirect("/login");
        }
      } else {
        console.error(res.response.data);
      }
    });
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        type="text"
        placeholder="johnm"
        name="username"
        label="userName"
      />

      <InputForm
        type="password"
        placeholder="*****"
        name="password"
        label="Password"
      />
      <Button variant="bg-green-600" type="submit">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;

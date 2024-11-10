import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="min-w-80 p-2">
        <div className="mb-5">
          <h1 className="font-bold text-3xl text-blue-600">{title}</h1>
          <p className="font-medium text-sm text-slate-500">
            Silahkan masukkan data diri
          </p>
        </div>
        {children}
        <TypePages type={type} />
      </div>
    </div>
  );
};

const TypePages = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-sm mt-2 text-slate-500">
        Don't have an account?{" "}
        <Link to="/register" className="font-bold">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm mt-2 text-slate-500">
        Already have an account{" "}
        <Link to="/login" className="font-bold">
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayout;

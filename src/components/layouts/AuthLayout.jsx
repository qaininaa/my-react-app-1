const AuthLayout = (props) => {
  const { children, title } = props;
  return (
    <div className="min-w-80 p-2">
      <div className="mb-5">
        <h1 className="font-bold text-3xl text-blue-600">{title}</h1>
        <p className="font-medium text-sm text-slate-500">
          Silahkan masukkan data diri
        </p>
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;

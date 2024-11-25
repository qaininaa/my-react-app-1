const Button = (props) => {
  const { variant, children, onClick = () => {}, type = "button" } = props;
  return (
    <button
      className={`h-10 w-full mt-4 px-6 font-semibold rounded-md ${variant} text-white`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

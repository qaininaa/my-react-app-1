const Button = (props) => {
  const { variant, children } = props;
  return (
    <button
      className={`h-10 w-full mt-4 px-6 font-semibold rounded-md ${variant} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;

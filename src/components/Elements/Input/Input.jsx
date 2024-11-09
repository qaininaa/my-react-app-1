const Input = (props) => {
  const { type, name, placeholder, id } = props;
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      id={id}
      className="border-2 border-slate-200 w-full p-1 rounded-md"
    />
  );
};

export default Input;

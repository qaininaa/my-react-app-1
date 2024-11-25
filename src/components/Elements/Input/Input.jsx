import { useState } from "react";

const Input = (props) => {
  const [isFocus, setFocus] = useState(false);
  const { type, name, placeholder, id } = props;
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      id={id}
      className={`w-full p-1 rounded-md ${
        isFocus
          ? "border-2 border-blue-600 outline-none"
          : "border-2 border-slate-200 "
      }`}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    />
  );
};

export default Input;

import Input from "./Input";
import Label from "./Label";

const InputForm = (pros) => {
  const { name, placeholder, type, label } = pros;
  return (
    <div className="mb-2">
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
      ></Input>
    </div>
  );
};

export default InputForm;

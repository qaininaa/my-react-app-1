import Input from "./Input";
import Label from "./Label";

const InputForm = (pros) => {
  const { id, name, placeholder, type, label } = pros;
  return (
    <div className="mb-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} name={name} placeholder={placeholder} type={type}></Input>
    </div>
  );
};

export default InputForm;

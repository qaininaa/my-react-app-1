const Label = (props) => {
  const { htmlfor, children } = props;

  return (
    <label
      htmlFor={htmlfor}
      className="block text-sm font-semibold text-slate-600"
    >
      {children}
    </label>
  );
};

export default Label;

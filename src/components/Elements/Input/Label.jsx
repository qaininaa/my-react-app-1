const Label = (props) => {
  const { htmlFor, children } = props;

  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-semibold text-slate-600"
    >
      {children}
    </label>
  );
};

export default Label;

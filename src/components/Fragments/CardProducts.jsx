const CardProducts = (props) => {
  const { children } = props;
  return (
    <div className="border-2 border-slate-800 w-64 min-w-20 p-3 h-96 flex flex-col ">
      {children}
    </div>
  );
};

const Header = ({ img, alt }) => {
  return (
    <div className="border-2 border-red-800">
      <img src={img} alt={alt} className="w-56 h-56" />
    </div>
  );
};

const Body = ({ brand, children }) => {
  return (
    <div>
      <h1 className="text-xl font-semibold">{brand}</h1>
      <p className="text-xs text-justify">{children}</p>
    </div>
  );
};

const Footer = ({ price, onClick = () => {}, handleChart }) => {
  return (
    <div className="flex justify-between items-center mt-auto">
      <h2 className="text-lg font-semibold">
        {price.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
          maximumFractionDigits: 0,
        })}
      </h2>
      <button
        type="button"
        className="text-sm p-2 bg-blue-600 text-white"
        onClick={onClick}
      >
        Add to Chart
      </button>
    </div>
  );
};

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;

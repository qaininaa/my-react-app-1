import { useNavigate } from "react-router-dom";
import CardProducts from "../components/Fragments/CardProducts";
import { useState } from "react";

const Products = [
  {
    id: 1,
    img: "./public/image.png",
    brand: "sepatu",
    desc: `Lorem ipsum dolor sit amet consectetur, 
    adipisicing elit. Porro dolor est in aperiam unde nulla`,
    price: 1000000,
  },
  {
    id: 2,
    img: "./public/image.png",
    brand: "sepatu baru",
    desc: `Lorem ipsum dolor sit amet consectetur, 
    adipisicing elit. Porro dolor est in aperiam unde nulla`,
    price: 2000000,
  },
];

const ProductsPage = () => {
  const navigate = useNavigate();
  const [chart, setChart] = useState([
    {
      id: 10,
      brand: "sepatu",
      price: 10000,
      qty: 10,
    },
  ]);

  const handleCart = (product) => {
    setChart((prevChart) => {
      const isAlreadyInCart = prevChart.some((item) => item.id === product.id);
      if (isAlreadyInCart) {
        return prevChart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prevChart, { ...product, qty: 1 }];
      }
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    navigate("/login");
  };

  return (
    <>
      <div className="w-full flex bg-blue-800 p-3 justify-end items-center gap-x-8">
        <p className="text-white">
          <span className="font-semibold text-xl mr-2">Hallo!</span>{" "}
          {localStorage.getItem("email")}
        </p>

        <button
          type="button"
          className="bg-white p-2 px-3 rounded hover:opacity-70"
          onClick={() => handleLogout()}
        >
          Logout
        </button>
      </div>
      <div className="flex mt-4 gap-2 p-2 ">
        <div className="flex flex-wrap gap-2 w-2/3">
          {Products.map((product) => (
            <CardProducts key={product.id}>
              <CardProducts.Header img={product.img} />
              <CardProducts.Body brand={product.brand}>
                {product.desc}
              </CardProducts.Body>
              <CardProducts.Footer
                price={product.price}
                onClick={() => {
                  handleCart(product);
                }}
              />
            </CardProducts>
          ))}
        </div>
        <div className="w-1/3">
          <table className="table-auto text-left border border-slate-400 w-full">
            <thead>
              <tr className="border-b-2 border-sky-800">
                <th>Brand</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {chart.map((item) => (
                <tr key={item.id}>
                  <td>{item.brand}</td>
                  <td>{item.price}</td>
                  <td>{item.qty}</td>
                  <td>{item.price * item.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;

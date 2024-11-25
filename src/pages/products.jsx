import { useNavigate } from "react-router-dom";
import CardProducts from "../components/Fragments/CardProducts";
import { useState, useEffect } from "react";
import axios from "axios";
import { fetchStore } from "../service/productService";
import { getUsername } from "../service/auth.service";

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

export default function ProductsPage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [chart, setChart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    fetchStore((data) => {
      setProducts(data);
    });
  }, []);

  const handleCart = (product) => {
    setChart((prevChart) => {
      const isAlreadyInCart = prevChart.find((item) => item.id === product.id);
      if (isAlreadyInCart) {
        return prevChart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prevChart, { ...product, qty: 1 }];
      }
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setUsername(getUsername(token));
  }, []);

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < chart.length; i++) {
      sum += chart[i].qty * chart[i].price;
    }
    setTotalPrice(sum);
  }, [chart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <div className="w-full flex bg-blue-800 p-3 justify-end items-center gap-x-8">
        <p className="text-white">
          <span className="font-semibold text-xl mr-2">Hallo!</span> {username}
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
          {products.map((product) => (
            <CardProducts key={product.id}>
              <CardProducts.Header img={product.image} />
              <CardProducts.Body brand={product.title}>
                {product.description}
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
              {chart.length > 0 &&
                chart.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title.substring(0, 20)}...</td>
                    <td>
                      {item.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 0,
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      {(item.price * item.qty).toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 0,
                      })}
                    </td>
                  </tr>
                ))}
              <tr>
                <td colSpan={3} className="font-bold">
                  Total Price
                </td>
                <td className="font-bold">
                  {totalPrice.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0,
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

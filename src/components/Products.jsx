import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Card from "../components/Card";
import { CartContext } from "../context/CartContext";

export default function Products() {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://ecommerce-backend-1-byr1.onrender.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-10 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
      {products.map((prod) => (
        <Card
          key={prod._id}
          id={prod._id}
          image={prod.image}
          title={prod.name}
          description={prod.description || "No description available"}
          price={prod.price}
          onAdd={async () => {
            await addToCart(prod._id, 1); // Add to cart
            navigate("/cart");             // Redirect to cart
          }}
        />
      ))}
    </div>
  );
}

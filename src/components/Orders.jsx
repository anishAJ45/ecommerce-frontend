import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  const location = useLocation();

  // Redirect if no token
  if (!token) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  // Fetch orders
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("https://ecommerce-backend-1-byr1.onrender.com/orders", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch orders");

        const data = await res.json();
        setOrders(data.orders || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [token]);

  // Place test order
  const placeOrder = async () => {
    try {
      const res = await fetch("https://ecommerce-backend-1-byr1.onrender.com/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          products: [{ product: "YOUR_PRODUCT_ID_HERE", qty: 1 }],
          totalAmount: 100,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to place order");

      alert("Order placed successfully!");
      setOrders((prev) => [...prev, data.order]);
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading orders...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">Error: {error}</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">My Orders</h1>

      <button
        className="mb-6 py-2 px-4 bg-amber-900 text-white rounded-lg shadow hover:bg-amber-700 transition"
        onClick={placeOrder}
      >
        Place Test Order
      </button>

      {orders.length === 0 ? (
        <p className="text-gray-600">No orders found.</p>
      ) : (
        <div className="grid gap-6">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white border rounded-lg shadow p-6 hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-700 font-semibold">Order ID:</p>
                <span className="text-gray-800 break-all">{order._id}</span>
              </div>

              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-700 font-semibold">Total Amount:</p>
                <span className="text-gray-800 font-medium">${order.totalAmount}</span>
              </div>

              <p className="text-gray-700 font-semibold mb-2">Products:</p>
              <ul className="space-y-2">
                {order.products.map((item) => (
                  <li
                    key={item.product._id}
                    className="flex justify-between items-center bg-gray-50 p-2 rounded"
                  >
                    <span className="font-medium text-gray-800">{item.product.name}</span>
                    <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-sm">
                      × {item.qty}
                    </span>
                    <span className="text-gray-600">${item.product.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

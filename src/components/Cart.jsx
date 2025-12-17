// src/pages/Cart.jsx
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartPage() {
  const { cartItems, loading, increaseQty, decreaseQty, removeItem, clearCart } = useContext(CartContext);

  const total = cartItems.reduce((s, it) => s + it.price * it.quantity, 0);

  if (loading) return <div className="p-8">Loading cart…</div>;

  return (
    <div className="bg-white w-3/4 mx-auto p-6 rounded-lg mb-10">
      <h1 className="text-center font-bold text-xl mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">₹{item.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button onClick={() => decreaseQty(item.id)} className="px-3 py-1 border rounded-md">-</button>
                  <span className="w-6 text-center">{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)} className="px-3 py-1 border rounded-md">+</button>
                </div>

                <div className="text-right">
                  <p className="font-semibold">₹{item.price * item.quantity}</p>
                  <button onClick={() => removeItem(item.id)} className="text-sm text-red-600">Remove</button>
                </div>
              </div>
            ))}
          </div>

                {/* TOTAL SUMMARY BOX */}
        <div className="shadow-xl border border-gray-200 p-6 rounded-2xl w-[600px] mt-6 bg-white">

          <h3 className="font-bold text-2xl mb-4 text-amber-900">
            Order Summary
          </h3>

          {/* Subtotal */}
          <div className="flex justify-between text-gray-700 mb-2">
            <span>Subtotal:</span>
            <span>₹{total}</span>
          </div>

          {/* Discount */}
          {total > 1000 ? (
            <div className="flex justify-between text-green-600 mb-2">
              <span>Discount (10%):</span>
              <span>-₹{Math.floor(total * 0.1)}</span>
            </div>
          ) : (
            <div className="flex justify-between text-gray-400 mb-2">
              <span>Discount:</span>
              <span>₹0</span>
            </div>
          )}

          {/* Divider */}
          <div className="border-t my-3"></div>

          {/* Final total */}
          <div className="flex justify-between text-2xl font-semibold text-amber-900 mb-4">
            <span>Total:</span>
            <span>
              ₹
              {total > 1000
                ? total - Math.floor(total * 0.1)
                : total}
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={clearCart}
              className="px-4 py-2 border rounded-lg hover:bg-gray-100"
            >
              Clear Cart
            </button>

            <button className="ml-auto px-4 py-2 bg-amber-900 hover:bg-amber-700 text-white rounded-lg">
              Checkout
            </button>
          </div>

        </div>


        </>
      )}
    </div>
  );
}

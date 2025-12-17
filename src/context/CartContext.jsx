import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const userId = sessionStorage.getItem("userId");
  const token = sessionStorage.getItem("token");

  // Fetch cart
  const fetchCart = async () => {
    if (!userId) return setCartItems([]);
    try {
      setLoading(true);
      const res = await fetch(`http://localhost:3000/cart/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data && data.products) {
        setCartItems(
          data.products.map((p) => ({
            id: p.product._id,
            name: p.product.name,
            price: p.product.price,
            image: p.product.image,
            quantity: p.quantity,
          }))
        );
      } else {
        setCartItems([]);
      }
    } catch (err) {
      console.error("Error fetching cart:", err);
      setCartItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [userId]);

  const addToCart = async (productId, quantity = 1) => {
    if (!userId) return alert("Please login first!");
    try {
      await fetch("http://localhost:3000/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userId, productId, quantity }),
      });
      await fetchCart();
    } catch (err) {
      console.error("Error adding to cart:", err);
    }
  };

  const increaseQty = async (cartItemId) => {
    const item = cartItems.find((c) => c.id === cartItemId);
    if (!item) return;
    try {
      await fetch("http://localhost:3000/cart/update", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userId, productId: cartItemId, quantity: item.quantity + 1 }),
      });
      await fetchCart();
    } catch (err) {
      console.error(err);
    }
  };

  const decreaseQty = async (cartItemId) => {
    const item = cartItems.find((c) => c.id === cartItemId);
    if (!item || item.quantity <= 1) return;
    try {
      await fetch("http://localhost:3000/cart/update", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userId, productId: cartItemId, quantity: item.quantity - 1 }),
      });
      await fetchCart();
    } catch (err) {
      console.error(err);
    }
  };

  const removeItem = async (cartItemId) => {
    try {
      await fetch("http://localhost:3000/cart/remove", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userId, productId: cartItemId }),
      });
      await fetchCart();
    } catch (err) {
      console.error(err);
    }
  };

  const clearCart = async () => {
    try {
      await fetch(`http://localhost:3000/cart/clear/${userId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      await fetchCart();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, loading, addToCart, increaseQty, decreaseQty, removeItem, clearCart, fetchCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LoginForm from './components/LoginForm.jsx'
import Orders from './components/Orders.jsx'
import Cart from './components/Cart.jsx'
import Products from './components/Products.jsx'
import Admin from './components/Admin.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import AdminRoute from './components/AdminRoute.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import HomeLayout from './layouts/HomeLayout.jsx'
import { CartProvider } from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartProvider>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path='/' element={<App />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginForm />} />

          <Route path="/orders" element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          } />

          <Route path="/admin" element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          } />
        </Route>
      </Routes>
    </CartProvider>
  </BrowserRouter>
);

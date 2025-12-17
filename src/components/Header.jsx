import { Link } from "react-router";

const Header = () => {
  return (
    <div className="bg-amber-50 p-4 text-gray-800 flex justify-between items-center">
      <div className="font-bold italic text-4xl tracking-wider text-amber-950">
        <Link to="/">LEO</Link>
      </div>

      <div className="flex justify-center gap-6 text-xl text-amber-950 p-2">
        <Link to="/" className="hover:text-neutral-600">Home</Link>
        <Link to="/products" className="hover:text-neutral-600">Products</Link>
        <Link to="/orders" className="hover:text-neutral-600">Orders</Link>
        <Link to="/login" className="hover:text-neutral-600">Login</Link>
        <Link to="/cart" className="hover:text-neutral-600">Cart</Link>
      </div>

      <div className="flex items-center gap-6 text-amber-950 text-lg font-medium">
        <div className="hover:text-neutral-600">Search</div>
        <div className="hover:text-neutral-600">Profile</div>
      </div>
    </div>
  );
}

export default Header;

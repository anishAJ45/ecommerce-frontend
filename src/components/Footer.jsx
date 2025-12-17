
const Footer = () => {
  return (
    <footer className="mt-16 border-t bg-amber-50 italic">
      <div className="max-w-6xl mx-auto px-8 py-10 flex flex-col md:flex-row md:items-start md:justify-between gap-12">

        <div className="space-y-6">
          <div className="inline-flex items-center border-2 border-amber-900 px-5 py-2 mx-8">
            <span className="font-semibold text-lg text-amber-900">LEO</span>
          </div>

          <div className="flex items-center text-amber-900 text-lg font-medium">
            <button className="hover:underline">Instagram| </button>
            <button className="hover:underline"> Twitter</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-sm">

          <div>
            <h4 className="font-semibold text-amber-900 mb-3">Shop</h4>
            <ul className="space-y-2 text-gray-800">
              <li>Serums</li>
              <li>Moisturizers</li>
              <li>Cleansers</li>
              <li>Sunscreens</li>
              <li>Face Masks</li>
              <li>Combos & Kits</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-amber-900 mb-3">About HERA</h4>
            <ul className="space-y-2 text-gray-800">
              <li>Our Story</li>
              <li>Ingredients Philosophy</li>
              <li>Cruelty-Free Promise</li>
              <li>Sustainability</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-amber-900 mb-3">Help</h4>
            <ul className="space-y-2 text-gray-800">
              <li>FAQs</li>
              <li>Shipping & Returns</li>
              <li>Track Order</li>
              <li>Contact Support</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;

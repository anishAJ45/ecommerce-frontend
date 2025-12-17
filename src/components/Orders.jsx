import headphone from "../assets/headphone.jpg"
import laptop from "../assets/laptop.jpg"
import smartphone from "../assets/smartphone.jpg"
const sampleOrders = [
  {
    id: "ORD-1001",
    date: "2025-12-01",
    status: "Delivered",
    items: [
      { id: 1, title: "Headphone", price: 899, qty: 1, image: headphone },
      { id: 2, title: "Laptop", price: 549, qty: 1, image: laptop },
    ],
    shipping: 49,
    discount: 0,
  },
  {
    id: "ORD-1002",
    date: "2025-11-21",
    status: "Processing",
    items: [
      { id: 3, title: "Smartphone", price: 649, qty: 2, image: smartphone },
    ],
    shipping: 49,
    discount: 100, 
  },
];

export default function Orders() {
  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Your Orders</h1>

      {sampleOrders.length === 0 ? (
        <div className="text-center text-gray-600">You have no orders yet.</div>
      ) : (
        <div className="space-y-6">
          {sampleOrders.map((order) => {
            const subtotal = order.items.reduce((s, it) => s + it.price * it.qty, 0);
            const total = subtotal + order.shipping - (order.discount || 0);

            return (
              <div key={order.id} className="bg-white shadow rounded-xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <div className="text-sm text-gray-500">Order</div>
                    <div className="text-lg font-medium">{order.id}</div>
                    <div className="text-sm text-gray-500 mt-1">Placed on {order.date}</div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      order.status === "Delivered" ? "bg-emerald-100 text-emerald-700" :
                      order.status === "Processing" ? "bg-yellow-100 text-yellow-800" :
                      "bg-gray-100 text-gray-700"
                    }`}>
                      {order.status}
                    </div>

                    <button className="px-3 py-1 border rounded-md text-sm">View details</button>
                  </div>
                </div>

                <div className="mt-4 border-t pt-4 space-y-3">
                  {order.items.map((it) => (
                    <div key={it.id} className="flex items-center gap-4">
                      <img src={it.image} alt={it.title} className="w-20 h-20 object-cover rounded-md" />
                      <div className="flex-1">
                        <div className="font-medium">{it.title}</div>
                        <div className="text-sm text-gray-500">Qty: {it.qty}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">₹{(it.price * it.qty).toLocaleString()}</div>
                        <div className="text-sm text-gray-500">₹{it.price.toLocaleString()} each</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 border-t pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-sm text-gray-600">
                    <div>Shipping: ₹{order.shipping.toLocaleString()}</div>
                    <div>Discount: ₹{(order.discount || 0).toLocaleString()}</div>
                  </div>

                  <div className="text-right mt-3 sm:mt-0">
                    <div className="text-sm text-gray-600">Subtotal: ₹{subtotal.toLocaleString()}</div>
                    <div className="text-xl font-semibold">Total: ₹{total.toLocaleString()}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

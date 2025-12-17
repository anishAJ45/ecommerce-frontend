// components/Card.jsx
const Card = ({ id, image, title, description, price, onAdd }) => {
  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300 max-w-xs mx-auto">
      
      {/* Image fills top area */}
      <div className="w-full h-52">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg text-gray-800 font-semibold truncate">{title}</h3>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{description}</p>
        <span className="text-gray-900 font-bold mt-2">₹{price}</span>

        {/* Add to Cart Button */}
        {onAdd && (
          <div className="mt-auto flex justify-center pt-4">
            <button
              onClick={onAdd}
              className="px-6 py-2 bg-amber-600 text-white text-sm rounded-full hover:bg-amber-500 transition"
            >
              Add to Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;

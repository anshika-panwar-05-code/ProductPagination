import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded shadow-md p-4 bg-white hover:shadow-lg transition">
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-1">{product.description}</p>
      <p className="text-blue-700 font-bold">₹{product.price}</p>
    </div>
  );
};

export default ProductCard;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Hamburger and close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-300 text-white p-4 shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-black">Ecommerce Store</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className="text-black hover:underline">Products</Link>
          <Link to="/add" className="text-black hover:underline">Add Product</Link>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} className="text-black" /> : <Menu size={28} className="text-black" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col items-center gap-4 bg-purple-200 py-4 rounded">
          <Link to="/" className="text-black hover:underline" onClick={() => setIsOpen(false)}>Products</Link>
          <Link to="/add" className="text-black hover:underline" onClick={() => setIsOpen(false)}>Add Product</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

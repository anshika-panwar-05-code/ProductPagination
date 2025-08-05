// import React, { useState } from 'react';
// import API from '../api/api'
// import { useNavigate } from 'react-router-dom';

// const AddProduct = () => {
//     const [form, setForm] = useState({
//         name: '',
//         description: '',
//         price: '',
//         category: '',
//     });
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await API.post('/products', form);
//             navigate('/');
//         } catch (err) {
//             console.error('Error adding product:', err);
//         }
//     };

//     return (
//         <div className="max-w-xl mx-auto mt-8 p-6 bg-white rounded shadow">
//             <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Product Name"
//                     className="w-full border p-2 rounded"
//                     value={form.name}
//                     onChange={handleChange}
//                     required
//                 />
//                 <textarea
//                     name="description"
//                     placeholder="Description"
//                     className="w-full border p-2 rounded"
//                     value={form.description}
//                     onChange={handleChange}
//                     required
//                 />

//                 <select
//                     type="text"
//                     name="category"
//                     placeholder="Category"
//                     className="w-full border p-2 rounded"
//                     value={form.category}
//                     onChange={handleChange}
//                     required>
//                     <option value="">Select Category</option>
//                     <option value="Electronics">Electronics</option>
//                     <option value="Clothing">Clothing</option>
//                     <option value="Books">Books</option>
//                     <option value="Furniture">Furniture</option>

//                 </select>



//                 <input
//                     type="number"
//                     name="price"
//                     placeholder="Price"
//                     className="w-full border p-2 rounded"
//                     value={form.price}
//                     onChange={handleChange}
//                     required
//                 />
//                 <button
//                     type="submit"
//                     className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//                 >
//                     Add Product
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default AddProduct;


import React, { useState } from 'react';
import API from '../api/api'
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const [form, setForm] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await API.post('/products', form);
            navigate('/');
            console.log('Form submitted:', form);
        } catch (err) {
            console.error('Error adding product:', err);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4">
            {/* Background Decoration */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-pink-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-2xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-lg mb-6">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </div>
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent mb-3">
                        Add New Product
                    </h2>
                    <p className="text-lg text-gray-600">Create a new product listing with detailed information</p>
                </div>

                {/* Form Container */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-indigo-200/50 border border-white/20 p-8 md:p-12">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Product Name */}
                        <div className="group">
                            <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                                Product Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter product name..."
                                className="w-full bg-white/90 border-0 rounded-2xl px-6 py-4 text-gray-800 placeholder-gray-400 shadow-lg shadow-gray-100/50 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:shadow-xl focus:shadow-indigo-200/60 transition-all duration-300 text-lg"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Description */}
                        <div className="group">
                            <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                Description
                            </label>
                            <textarea
                                name="description"
                                placeholder="Describe your product in detail..."
                                rows="4"
                                className="w-full bg-white/90 border-0 rounded-2xl px-6 py-4 text-gray-800 placeholder-gray-400 shadow-lg shadow-gray-100/50 focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:shadow-xl focus:shadow-purple-200/60 transition-all duration-300 text-lg resize-none"
                                value={form.description}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Category and Price Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Category */}
                            <div className="group">
                                <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                                    Category
                                </label>
                                <div className="relative">
                                    <select
                                        name="category"
                                        className="w-full appearance-none bg-white/90 border-0 rounded-2xl px-6 py-4 pr-12 text-gray-800 shadow-lg shadow-gray-100/50 focus:outline-none focus:ring-4 focus:ring-pink-500/20 focus:shadow-xl focus:shadow-pink-200/60 transition-all duration-300 text-lg cursor-pointer"
                                        value={form.category}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Category</option>
                                        <option value="Electronics">📱 Electronics</option>
                                        <option value="Clothing">👕 Clothing</option>
                                        <option value="Books">📚 Books</option>
                                        <option value="Furniture">🪑 Furniture</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                                        <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Price */}
                            <div className="group">
                                <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                    Price
                                </label>
                                <div className="relative">
                                    <span className="absolute left-6 top-1/2 transform -translate-y-1/2 text-green-600 text-xl font-bold">$</span>
                                    <input
                                        type="number"
                                        name="price"
                                        placeholder="0.00"
                                        className="w-full bg-white/90 border-0 rounded-2xl pl-12 pr-6 py-4 text-gray-800 placeholder-gray-400 shadow-lg shadow-gray-100/50 focus:outline-none focus:ring-4 focus:ring-green-500/20 focus:shadow-xl focus:shadow-green-200/60 transition-all duration-300 text-lg"
                                        value={form.price}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6">
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold py-5 px-8 rounded-2xl shadow-2xl shadow-indigo-300/50 hover:shadow-3xl hover:shadow-indigo-400/60 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-indigo-500/20 transition-all duration-300 text-lg relative overflow-hidden group"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                    Add Product
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
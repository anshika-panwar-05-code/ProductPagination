// import React, { useEffect, useState } from 'react';
// import API from '../api/api'

// import ProductCard from '../components/ProductCard';
// import Pagination from '../components/Pagination';

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [sortField, setSortField] = useState('createdAt');
//   const [sortOrder, setSortOrder] = useState('asc');
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   const fetchProducts = async () => {
//     try {
//       const res = await API.get(
//         `/products?page=${page}&limit=5&sort=${sortField}&order=${sortOrder}`
//       );
//       setProducts(res.data.product);
//       setTotalPages(res.data.totalPages);
//     } catch (err) {
//       console.error('Error fetching products:', err);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, [sortField, sortOrder, page]);

//   return (
//     <div className="p-6 max-w-5xl mx-auto">
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-2xl font-bold">All Products</h1>
//         <div className="flex gap-2">
//           <select
//             className="border p-2 rounded"
//             value={sortField}
//             onChange={(e) => setSortField(e.target.value)}
//           >
//             <option value="createdAt">Newest</option>
//             <option value="price">Price</option>
//             <option value="name">Name</option>
//           </select>

//           <select
//             className="border p-2 rounded"
//             value={sortOrder}
//             onChange={(e) => setSortOrder(e.target.value)}
//           >
//             <option value="asc">Asc</option>
//             <option value="desc">Desc</option>
//           </select>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {products.map((p) => (
//           <ProductCard key={p._id} product={p} />
//         ))}
//       </div>

//       <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
//     </div>
//   );
// };

// export default Home;


import React, { useEffect, useState } from 'react';
import API from '../api/api'
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [sortField, setSortField] = useState('createdAt');
  const [sortOrder, setSortOrder] = useState('asc');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchProducts = async () => {
    try {
      const res = await API.get(
        `/products?page=${page}&limit=5&sort=${sortField}&order=${sortOrder}`
      );
      setProducts(res.data.product);
      setTotalPages(res.data.totalPages);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [sortField, sortOrder, page]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-100/40 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-gradient-to-br from-blue-400/15 via-purple-400/10 to-pink-300/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-gradient-to-tr from-indigo-400/15 via-blue-400/10 to-cyan-300/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-300/10 to-pink-300/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-l from-cyan-300/10 to-blue-300/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Ultra Modern Header */}
      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-white/70 border-b border-white/30 shadow-lg shadow-blue-100/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">
            {/* Hero Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-200/50">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-5xl font-black bg-gradient-to-r from-gray-900 via-blue-700 to-purple-700 bg-clip-text text-transparent leading-tight">
                    Premium Collection
                  </h1>
                  <p className="text-xl text-gray-600 font-medium mt-2">Curated products for modern lifestyle</p>
                </div>
              </div>
            </div>
            
            {/* Advanced Filter Controls */}
            <div className="flex flex-wrap gap-4">
              <div className="relative group">
                <label className="absolute -top-2 left-4 bg-white px-2 text-xs font-bold text-blue-600 z-10">Sort By</label>
                <select
                  className="appearance-none bg-white/95 backdrop-blur-sm border-2 border-blue-100/50 rounded-2xl pl-6 pr-14 py-4 text-sm font-bold text-gray-800 shadow-xl shadow-blue-100/30 hover:shadow-2xl hover:shadow-blue-200/40 focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-400 transition-all duration-300 cursor-pointer min-w-[160px]"
                  value={sortField}
                  onChange={(e) => setSortField(e.target.value)}
                >
                  <option value="createdAt">🌟 Latest First</option>
                  <option value="price">💎 By Price</option>
                  <option value="name">📋 Alphabetical</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-blue-500 group-hover:text-blue-700 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                  </svg>
                </div>
              </div>

              <div className="relative group">
                <label className="absolute -top-2 left-4 bg-white px-2 text-xs font-bold text-purple-600 z-10">Order</label>
                <select
                  className="appearance-none bg-white/95 backdrop-blur-sm border-2 border-purple-100/50 rounded-2xl pl-6 pr-14 py-4 text-sm font-bold text-gray-800 shadow-xl shadow-purple-100/30 hover:shadow-2xl hover:shadow-purple-200/40 focus:outline-none focus:ring-4 focus:ring-purple-500/30 focus:border-purple-400 transition-all duration-300 cursor-pointer min-w-[140px]"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                  <option value="asc">⬆️ Ascending</option>
                  <option value="desc">⬇️ Descending</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-purple-500 group-hover:text-purple-700 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Products Grid Section */}
        <div className="mb-20">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg shadow-gray-200/50 border border-white/50 mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">Featured Products</span>
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Perfect Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((p, index) => (
              <div 
                key={p._id} 
                className="group perspective-1000 animate-fadeInUp"
                style={{
                  animationDelay: `${index * 120}ms`,
                  animationFillMode: 'both'
                }}
              >
                <div className="relative transform-gpu transition-all duration-700 ease-out group-hover:scale-105">
                  {/* Multi-layer Gradient Borders */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-3xl opacity-0 group-hover:opacity-25 transition-all duration-700 blur-lg"></div>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 rounded-3xl opacity-0 group-hover:opacity-30 transition-all duration-500 blur-sm"></div>
                  
                  {/* Perfect Card Container */}
                  <div className="relative bg-white/95 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/30 group-hover:shadow-3xl group-hover:shadow-blue-500/20 transition-all duration-700 border border-white/40">
                    
                    {/* Image Section */}
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-blue-50 via-purple-25 to-pink-50 overflow-hidden">
                      {/* Beautiful Gradient Placeholder */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 flex items-center justify-center">
                        <div className="text-center space-y-3">
                          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-xl shadow-blue-300/30">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <p className="text-sm text-gray-500 font-medium">Product Image</p>
                        </div>
                      </div>
                      
                      {/* Floating Category Badge */}
                      <div className="absolute top-4 left-4 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                        <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm text-xs font-bold text-gray-700 px-3 py-2 rounded-full shadow-lg border border-white/50">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                          {p.category || 'Category'}
                        </span>
                      </div>

                      {/* Price Badge */}
                      <div className="absolute bottom-4 right-4 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-2xl shadow-xl shadow-green-500/30 font-bold text-lg">
                          ${p.price || '0.00'}
                        </div>
                      </div>
                      
                      {/* Shimmer Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 space-y-4">
                      {/* Product Title */}
                      <h3 className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                        {p.name || 'Product Name'}
                      </h3>
                      
                      {/* Rating Stars */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-500 font-medium">(4.8)</span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                        {p.description || 'Premium product with excellent quality and modern design. Perfect for your needs.'}
                      </p>

                      {/* Action Button */}
                      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-2xl shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-600/40 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 relative overflow-hidden group/btn">
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13v6a2 2 0 002 2h6a2 2 0 002-2v-6" />
                          </svg>
                          Add to Cart
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                      </button>
                    </div>
                    
                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Pagination Section */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Pagination Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-2xl"></div>
            
            {/* Pagination Container */}
            <div className="relative bg-white/90 backdrop-blur-xl rounded-full p-8 shadow-2xl shadow-gray-300/30 border-2 border-white/50">
              <Pagination 
                currentPage={page} 
                totalPages={totalPages} 
                onPageChange={setPage} 
              />
            </div>
          </div>
        </div>
      </main>

      {/* Floating Action Elements */}
      <div className="fixed bottom-8 right-8 z-40">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-4 shadow-2xl shadow-blue-300/50 hover:shadow-purple-300/50 transition-all duration-300 cursor-pointer group">
          <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 40px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-gpu {
          transform: translate3d(0, 0, 0);
        }
      `}</style>
    </div>
  );
};

export default Home;
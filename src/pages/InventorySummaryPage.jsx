import React from 'react';

const InventorySummaryPage = () => {
  return (

      <div className="p-8 font-sans bg-gray-50 w-full ml-0 md:ml-64">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Inventory</h2>
          <div className="flex items-center space-x-2">
            <select className="px-4 py-2 border border-gray-300 rounded-md">
              <option>Nanny's Shop</option>
            </select>
            <img src="/path-to-avatar.jpg" alt="User Avatar" className="w-10 h-10 rounded-full" />
          </div>
        </header>

        {/* Inventory Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-indigo-100 rounded-md text-indigo-700 text-center">
            <h3 className="text-lg font-semibold">All Products</h3>
            <p className="text-2xl font-bold">350</p>
            <p>Active <span className="font-semibold">316</span> (88%)</p>
          </div>
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-red-600">Low Stock Alert</h3>
            <p className="text-2xl font-bold">23</p>
          </div>
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold">Expired</h3>
            <p className="text-2xl font-bold">3</p>
            <h3 className="text-lg font-semibold mt-4">1 Start Rating</h3>
            <p className="text-2xl font-bold">2</p>
          </div>
        </div>

        {/* Add New Product Button */}
        <div className="flex justify-end mb-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">+ Add a New Product</button>
        </div>

        {/* Inventory Items Table */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="font-semibold mb-4">Inventory Items</h3>
          <div className="overflow-auto">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th><input type="checkbox" /></th>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Unit Price</th>
                  <th>In-Stock</th>
                  <th>Discount</th>
                  <th>Total Value</th>
                  <th>Action</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'iPhone 13 Pro', category: 'Gadgets', price: '₦1,225,000.00', stock: 8, discount: '₦0.00', value: '₦50,000.00', action: 'Publish', status: 'Published' },
                  { name: 'Polo T-Shirt', category: 'Fashion', price: '₦25,000.00', stock: 'Out of Stock', discount: '₦0.00', value: '₦0.00', action: 'Unpublish', status: 'Unpublished' },
                  // Add more items as needed
                ].map((item, index) => (
                    <>
                      <tr key={index}>
                    <td><input type="checkbox" /></td>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                    <td>{item.stock}</td>
                    <td>{item.discount}</td>
                    <td>{item.value}</td>
                    <td>
                      <button className={`px-4 py-1 rounded-md ${item.action === 'Publish' ? 'bg-blue-500 text-white' : 'bg-gray-400 text-white'}`}>
                        {item.action}
                      </button>
                    </td>
                    <td className={`font-semibold ${item.status === 'Published' ? 'text-blue-500' : 'text-red-500'}`}>
                      {item.status}
                    </td>
                  </tr>
                    </>
                
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
   
  );
};

export default InventorySummaryPage;
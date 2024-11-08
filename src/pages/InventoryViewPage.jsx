import React from 'react';

const InventoryViewPage = () => {
  return (
    <div className="p-8 font-sans bg-gray-50">
      <header className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Inventory</h2>
        <div className="flex items-center space-x-2">
          <select className="px-4 py-2 border border-gray-300 rounded-md">
            <option>Nanny's Shop</option>
          </select>
          <img
            src="/path-to-avatar.jpg" // Replace with your image source
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </header>

      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-xl font-medium">Polo T-Shirt</h3>
          <p className="text-gray-500">Date Added: 12 Sept 2022 - 12:55 pm</p>
          <a href="https://1nancystores.com/polot-shirt" className="text-indigo-500 hover:underline">Product URL</a>
        </div>
        <div className="space-x-4">
          <button className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800">Edit Product</button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">Unpublish Product</button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="col-span-1">
          <img src="/path-to-product-image.jpg" alt="Product" className="w-full rounded-lg" />
        </div>

        <div className="col-span-3 grid grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h4 className="font-medium">Price</h4>
            <p>₦25,000.00</p>
            <h4 className="font-medium mt-4">In-Stock</h4>
            <p>20</p>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-md">
            <h4 className="font-medium">Total Orders</h4>
            <p>₦50,000.00</p>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-md">
            <h4 className="font-medium">Views</h4>
            <p>1,200</p>
            <h4 className="font-medium mt-4">Favourites</h4>
            <p>23</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h4 className="font-medium">All Orders</h4>
          <p>1</p>
          <h4 className="font-medium mt-4">Completed</h4>
          <p>1</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h4 className="font-medium">Cancelled</h4>
          <p>0</p>
          <h4 className="font-medium mt-4">Returned</h4>
          <p>0</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h4 className="font-medium">Damaged</h4>
          <p>0</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="font-semibold mb-4">Purchases</h3>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th>Order Date</th>
              <th>Order Type</th>
              <th>Unit Price</th>
              <th>Qty</th>
              <th>Discount</th>
              <th>Order Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12 Aug 2022 - 12:25 am</td>
              <td>Home Delivery</td>
              <td>₦25,000.00</td>
              <td>2</td>
              <td>₦0.00</td>
              <td>₦50,000.00</td>
              <td className="text-green-600 font-semibold">Completed</td>
            </tr>
            {/* Repeat rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryViewPage;
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaClock } from 'react-icons/fa'; // Import clock icon
import InputField from '../components/InputField';
import ToggleField from '../components/ToggleField';
import ImageUpload from '../components/ImageUpload';

const InventoryPage = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="p-8 font-sans bg-gray-50">
      <header className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">New Inventory Item</h2>
        <div>
          <button className="px-4 py-2 bg-gray-700 text-white rounded-md mr-2 hover:bg-gray-800">Save as Draft</button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Save & Publish</button>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-6">
        <section className="space-y-4">
          <InputField label="Product Name" placeholder="Enter product name" />
          <InputField label="Select Product Category" type="select" options={['Category 1', 'Category 2']} />
          <InputField label="Selling Price" placeholder="Enter selling price" />
          <InputField label="Cost Price" placeholder="Enter cost price" />
          <InputField label="Quantity in Stock" type="number" />
          <InputField label="Order Type" type="select" options={['Order 1', 'Order 2']} />
          <ToggleField label="Add Discount" />
          <ToggleField label="Add Expiry Date" />
        </section>

        <section className="space-y-4">
          <InputField label="Short Description" placeholder="Enter a short description" multiline />
          <InputField label="Product Long Description" placeholder="Enter a long description" multiline />
          <div className="space-y-2">
            <label className="block font-medium">Date Added</label>
            <div className="flex items-center space-x-2">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                dateFormat="Pp"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <FaClock className="text-gray-500" />
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <ImageUpload label="Upload Image" />
          <ImageUpload label="Additional Images" />
        </section>
      </div>
    </div>
  );
};
export default InventoryPage;
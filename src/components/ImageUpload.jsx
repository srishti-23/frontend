import React, { useState } from 'react';
import { FiUpload } from 'react-icons/fi';

const ImageUpload = ({ label }) => {
  const [image, setImage] = useState(null);

  // Handle image change for both profile and additional images
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Preview the selected image
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>

      {/* Image Upload */}
      <form className="flex flex-col items-center justify-center w-full mt-2">
        <label className="flex flex-col items-center justify-center w-[80%] h-48 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 cursor-pointer hover:border-indigo-600 hover:text-indigo-600">
          {image ? (
            <img src={image} alt="Preview" className="w-auto h-full object-cover rounded-lg" />
          ) : (
            <>
              <FiUpload size={24} />
             
            </>
          )}
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange} 
            className="hidden" // Hide the default input
          />
        </label>
      </form>
    </div>
  );
};

export default ImageUpload;
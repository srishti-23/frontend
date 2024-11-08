import React from 'react';

const InputField = ({ label, placeholder, type = 'text', options, multiline = false }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    {type === 'select' ? (
      <select className="w-full p-2 mt-1 border border-gray-300 rounded-md">
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    ) : multiline ? (
      <textarea
        className="w-full h-40 p-2 mt-1 border border-gray-300 rounded-md"
        placeholder={placeholder}
      ></textarea>
    ) : (
      <input
        type={type}
        className="w-full p-2 mt-1 border border-gray-300 rounded-md"
        placeholder={placeholder}
      />
    )}
  </div>
);

export default InputField;
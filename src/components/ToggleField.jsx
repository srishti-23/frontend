import React from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

const ToggleField = ({ label }) => (
  <div className="flex items-center justify-between mt-1">
    <label className="text-sm font-medium text-gray-700">{label}</label>
    <Toggle />
  </div>
);

export default ToggleField;
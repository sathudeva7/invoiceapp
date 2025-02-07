import React from 'react';

const SocialMediaInput = ({ iconClass, label, defaultValue, placeholder }) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="flex items-center space-x-2">
        <i className={`${iconClass} text-2xl`}></i>
        <label className="text-sm font-semibold">{label}</label>
      </div>
      <input
        type="text"
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="w-full p-2 bg-gray-700 rounded-lg border-none"
      />
    </div>
  );
};

export default SocialMediaInput;

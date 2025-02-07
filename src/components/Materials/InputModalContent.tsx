import React, { useState } from 'react';

const InputModalContent = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    onSubmit(inputValue);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter something..."
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default InputModalContent;

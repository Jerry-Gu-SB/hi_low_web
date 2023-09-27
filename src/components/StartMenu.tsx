import React, { useState } from 'react';

const StartMenu: React.FC = () => {
  const [isBlurred, setIsBlurred] = useState(true);

  const handleClick = () => {
    setIsBlurred(false);
  };

  return (
    <div className={`relative ${isBlurred ? 'blur' : ''}`}>
      {isBlurred ? (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <button className="p-2 bg-blue-500 text-white rounded" onClick={handleClick}>Start</button>
        </div>
      ) : (
        <div className="p-5">Welcome to the app</div>
      )}
    </div>
  );
};

export default StartMenu;
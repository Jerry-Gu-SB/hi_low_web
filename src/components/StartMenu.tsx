// StartMenu.js
import React from 'react';
interface StartMenuProps {
    onStart: () => void;
}
const StartMenu: React.FC<StartMenuProps> = ({ onStart }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <button className="p-2 bg-blue-500 text-white rounded" onClick={onStart}>Start</button>
    </div>
  );
};

export default StartMenu;

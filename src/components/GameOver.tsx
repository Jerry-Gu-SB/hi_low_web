// GameOver.tsx
import React from 'react';
interface StartMenuProps {
    onRestart: () => void;
}
const GameOver: React.FC<StartMenuProps> = ({ onRestart }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <button className="p-2 bg-blue-500 text-white rounded" onClick={onRestart}>Restart</button>
    </div>
  );
};

export default GameOver;

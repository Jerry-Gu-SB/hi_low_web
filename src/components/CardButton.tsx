import React from "react";

interface CardButtonProps {
  onClick: () => void;
  card: {
    id: number;
    name: string;
    cost: number;
    imageSrc: string;
  };
}

const CardButton: React.FC<CardButtonProps> = ({ card, onClick }) => {
  return (
    <div className="card">
      <button
        className={`w-full h-screen p-10 relative overflow-hidden`}
      >
        <div
          className={`hover:scale-105 transform origin-top-left transition-transform duration-300 ease-in-out`}
        >
          <img src={card.imageSrc} alt={card.name} />
          <p>Cost: ${card.cost.toFixed(2)}</p>
          <p>URL: ${card.imageSrc}</p>
        </div>
      </button>
    </div>
  );
};

export default CardButton;

import React, { useState } from "react";
import CardButton from "./components/CardButton";
import cardData from "./components/CardData";

const App: React.FC = () => {
  const [leftCard, setLeftCard] = useState(cardData[0]);
  const [rightCard, setRightCard] = useState(cardData[1]);

  

  const getCards = () => {
    // Assign cards to the left and right sides of the screen
    var leftCard = cardData[Math.floor(Math.random() * cardData.length)];
    var rightCard = cardData[Math.floor(Math.random() * cardData.length)];

    while (leftCard.cost !== rightCard.cost) {
      leftCard = cardData[Math.floor(Math.random() * cardData.length)];
      rightCard = cardData[Math.floor(Math.random() * cardData.length)];
    }
  };

  return (
    <div>
      <div className="flex h-screen">
        <div className="w-1/2">
          <CardButton card={leftCard} />
        </div>
        <div className="w-1/2">
          <CardButton card={rightCard} />
        </div>
      </div>
    </div>
  );
};

export default App;

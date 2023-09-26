import React, { useState } from "react";
import CardButton from "./components/CardButton";
import cardData from "./components/CardData";

const App: React.FC = () => {
  const [leftCard, setLeftCard] = useState(cardData[2]);
  const [rightCard, setRightCard] = useState(cardData[1]);

  const getCards = () => {
    console.log("getCards");

    let newLeftCard, newRightCard;
    // Assign cards to the left and right sides of the screen
    newLeftCard = cardData[Math.floor(Math.random() * cardData.length)];
    newRightCard = cardData[Math.floor(Math.random() * cardData.length)];

    console.log("newLeftCard", newLeftCard);
    // If the card costs are the same, keep generating new cards until they are different
    while (newLeftCard.cost === newRightCard.cost) {
      newLeftCard = cardData[Math.floor(Math.random() * cardData.length)];
      newRightCard = cardData[Math.floor(Math.random() * cardData.length)];
    }
    setLeftCard(newLeftCard);
    setRightCard(newRightCard);
  };

  return (
    <div>
      <div className="flex h-screen">
        <div className="w-1/2">
          <CardButton card={leftCard} onClick={getCards}/>
        </div>
        <div className="w-1/2">
          <CardButton card={rightCard} onClick={getCards}/>
        </div>
      </div>
    </div>
  );
};

export default App;

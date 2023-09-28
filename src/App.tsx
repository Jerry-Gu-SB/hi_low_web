import React, { useState } from "react";
import CardButton from "./components/CardButton";
import cardData from "./components/CardData";
import Card from "./components/Card";
import StartMenu from "./components/StartMenu";

const App: React.FC = () => {
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  
  const [leftCard, setLeftCard] = useState(cardData[2]);
  const [rightCard, setRightCard] = useState(cardData[1]);

  const handleClick = (clickedCard: Card) => {
    if (clickedCard.cost > leftCard.cost || clickedCard.cost > rightCard.cost) {
      setScore(score + 1);
    }

    assignNewCards();
  };

  const assignNewCards = () => {
    let newLeftCard, newRightCard;
    // Assign cards to the left and right sides of the screen
    newLeftCard = cardData[Math.floor(Math.random() * cardData.length)];
    newRightCard = cardData[Math.floor(Math.random() * cardData.length)];

    // If the card costs are the same, keep generating new cards until they are different
    while (newLeftCard.cost === newRightCard.cost) {
      newLeftCard = cardData[Math.floor(Math.random() * cardData.length)];
      newRightCard = cardData[Math.floor(Math.random() * cardData.length)];
    }
    setLeftCard(newLeftCard);
    setRightCard(newRightCard);
  }

  return (
    <div>
      {!gameStarted && <StartMenu onStart={() => setGameStarted(true)} />}
      {gameStarted && (
        <div className="flex h-screen">
          <h1>Score: {score}</h1>
          <div className="w-1/2">
            <CardButton card={leftCard} onClick={() => handleClick(leftCard)}/>
          </div>
          <div className="w-1/2">
            <CardButton card={rightCard} onClick={() => handleClick(rightCard)}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

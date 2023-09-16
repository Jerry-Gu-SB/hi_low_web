import React, { useState } from "react";
import QuizButton from "./components/QuizButton";

const App: React.FC = () => {
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false);

  const handleButtonClick = () => {
    // Generate a random boolean value to determine correctness
    const isCorrect = Math.random() < 0.5; // 50% chance of being correct

    setIsCorrectAnswer(isCorrect);

    // Handle any additional logic here, e.g., scoring, displaying feedback, etc.
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-600">
        Simple React Typescript Tailwind Sample
      </h1>
      <div className="flex h-screen">
        <QuizButton isCorrect={isCorrectAnswer} onClick={handleButtonClick} />
        <QuizButton isCorrect={!isCorrectAnswer} onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default App;

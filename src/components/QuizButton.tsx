import React from 'react';

interface QuizButtonProps {
  isCorrect: boolean;
  onClick: () => void;
}

const QuizButton: React.FC<QuizButtonProps> = ({ isCorrect, onClick }) => {
  return (
    <button
      className={`w-full h-full p-4 hover:scale-105 ${
        isCorrect ? 'bg-blue-500' : 'bg-red-500'
      }`}
      onClick={onClick}
    >
      {isCorrect ? 'Correct Answer' : 'Wrong Answer'}
    </button>
  );
};

export default QuizButton;

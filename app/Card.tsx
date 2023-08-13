import React from 'react';

interface CardProps {
  word: string;
  explanation: string;
  example: string;
}

const Card: React.FC<CardProps> = ({ word, explanation, example }) => {

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <h3 className="text-xl font-medium mb-2">
        {word}
      </h3>

      <p className="text-gray-600">
        {explanation}
      </p>

      <p className="text-gray-400 italic mt-2">
        {example}
      </p>
    </div>
  );
};

export default Card;

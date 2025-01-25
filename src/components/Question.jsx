/*
import React from 'react';

function Question({ question, onAnswerSelect }) {
  const { correctAnswer, incorrectAnswers } = question;
  const allAnswers = shuffleAnswers(correctAnswer, incorrectAnswers);

  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">{question.question}</h3>
      <ul>
        {allAnswers.map((answer, index) => (
          <li key={index}>
            <button
              className="btn btn-secondary mr-2 mb-2"
              onClick={() => onAnswerSelect(answer)}
            >
              {answer}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const shuffleAnswers = (correctAnswer, incorrectAnswers) => {
  const allAnswers = [correctAnswer, ...incorrectAnswers];

  // Fisher-Yates shuffle algorithm
  for (let i = allAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allAnswers[i], allAnswers[j]] = [allAnswers[j], allAnswers[i]];
  }

  return allAnswers;
};

export default Question;
*/

import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Question({ question, onAnswerSelect }) {
  const { correctAnswer, incorrectAnswers } = question;
  const allAnswers = shuffleAnswers(correctAnswer, incorrectAnswers);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    onAnswerSelect(answer);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="question-container"
    >
      <h3 className="text-xl font-semibold mb-2">{question.question}</h3>
      <ul>
        {allAnswers.map((answer, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <button
              className={`answer-button w-full ${
                selectedAnswer === answer ? 'selected' : ''
              }`}
              onClick={() => handleAnswerClick(answer)}
            >
              {answer}
            </button>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

const shuffleAnswers = (correctAnswer, incorrectAnswers) => {
    const allAnswers = [correctAnswer, ...incorrectAnswers];
  
    // Fisher-Yates shuffle algorithm
    for (let i = allAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allAnswers[i], allAnswers[j]] = [allAnswers[j], allAnswers[i]];
    }
  
    return allAnswers;
  };
  
  export default Question;
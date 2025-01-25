/*
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Result() {
  const location = useLocation();
  const { score, questions, userAnswers, timeTaken } = location.state || {};
  const navigate = useNavigate();

  const handleRestart = () => {
    navigate('/');
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Quiz Result</h2>
      <p className="mb-4">
        Your final score: {score} / {questions.length}
      </p>
      {timeTaken && (
        <p className="mb-4">Time taken: {timeTaken} seconds</p>
      )}
      <ul>
        {questions.map((question, index) => (
          <li key={index} className="mb-2">
            <p className="font-semibold">{question.question}</p>
            <p>Your answer: {userAnswers[index]}</p>
            <p className="font-bold">
              Correct answer: {question.correctAnswer}
            </p>
          </li>
        ))}
      </ul>
      <button className="btn btn-primary" onClick={handleRestart}>
        Restart Quiz
      </button>
    </div>
  );
}

export default Result;
*/

// src/components/Result.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Result() {
  const location = useLocation();
  const { score, questions, userAnswers, timeTaken } = location.state || {};
  const navigate = useNavigate();

  const handleRestart = () => {
    navigate('/');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2.5, type: 'spring' }}
      className="dark-background centered-form"
    >
      <h2 className="text-2xl font-bold mb-4">Quiz Result</h2>
      <p className="mb-4">
        Your final score: {score} / {questions.length}
      </p>
      {timeTaken && <p className="mb-4">Time taken: {timeTaken} seconds</p>}
      <ul>
        {questions.map((question, index) => (
          <li key={index} className="mb-2">
            <p className="font-semibold">{question.question}</p>
            <p>Your answer: {userAnswers[index]}</p>
            <p className="font-bold">
              Correct answer: {question.correctAnswer}
            </p>
          </li>
        ))}
      </ul>
      <button className="btn btn-primary" onClick={handleRestart}>
        Restart Quiz
      </button>
    </motion.div>
  );
}

export default Result;
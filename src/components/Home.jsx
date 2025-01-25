/*
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/quiz', { state: { category, difficulty } });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Trivia Quiz</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="category" className="block mb-2">
            Category:
          </label>
          <select
            id="category"
            className="select select-bordered w-full"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Any Category</option>
            <option value="arts_and_literature">Arts & Literature</option>
            <option value="film_and_tv">Film & TV</option>
            <option value="food_and_drink">Food & Drink</option>
            <option value="general_knowledge">General Knowledge</option>
            <option value="geography">Geography</option>
            <option value="history">History</option>
            <option value="music">Music</option>
            <option value="science">Science</option>
            <option value="society_and_culture">Society & Culture</option>
            <option value="sport_and_leisure">Sport & Leisure</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="difficulty" className="block mb-2">
            Difficulty:
          </label>
          <select
            id="difficulty"
            className="select select-bordered w-full"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Start Quiz
        </button>
      </form>
    </div>
  );
}

export default Home;
*/
/*

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/quiz', { state: { category, difficulty } });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Trivia Quiz</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="category" className="block mb-2">
            Category:
          </label>
          <select
            id="category"
            className="select select-bordered w-full"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Any Category</option>
            <option value="arts_and_literature">Arts & Literature</option>
            <option value="film_and_tv">Film & TV</option>
            <option value="food_and_drink">Food & Drink</option>
            <option value="general_knowledge">General Knowledge</option>
            <option value="geography">Geography</option>
            <option value="history">History</option>
            <option value="music">Music</option>
            <option value="science">Science</option>
            <option value="society_and_culture">Society & Culture</option>
            <option value="sport_and_leisure">Sport & Leisure</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="difficulty" className="block mb-2">
            Difficulty:
          </label>
          <select
            id="difficulty"
            className="select select-bordered w-full"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Start Quiz
        </button>
      </form>
    </div>
  );
}

export default Home;
*/

// src/components/Home.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/quiz', { state: { category, difficulty } });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className="dark-background centered-form"
    >
      <h1 className="title text-center">Trivia Domination</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="category" className="block mb-2">
            Category:
          </label>
          <select
            id="category"
            className="select select-bordered w-full"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Any Category</option>
            <option value="arts_and_literature">Arts & Literature</option>
            <option value="film_and_tv">Film & TV</option>
            <option value="food_and_drink">Food & Drink</option>
            <option value="general_knowledge">General Knowledge</option>
            <option value="geography">Geography</option>
            <option value="history">History</option>
            <option value="music">Music</option>
            <option value="science">Science</option>
            <option value="society_and_culture">Society & Culture</option>
            <option value="sport_and_leisure">Sport & Leisure</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="difficulty" className="block mb-2">
            Difficulty:
          </label>
          <select
            id="difficulty"
            className="select select-bordered w-full"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Start Quiz
        </button>
      </form>
    </motion.div>
  );
}

export default Home;
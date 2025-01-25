/*
import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Question from './Question';

function Quiz() {
  const location = useLocation();
  const { category, difficulty } = location.state || {};
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(60); // Initial time for the whole quiz
  const timerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      const apiUrl = `https://the-trivia-api.com/api/questions?${
        category ? `category=${category}&` : ''
      }${difficulty ? `difficulty=${difficulty}&` : ''}limit=10`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error('Error fetching questions:', error);
        // Handle error, e.g., display an error message
      }
    };

    fetchQuestions();
  }, [category, difficulty]);

  useEffect(() => {
    startTimer();
    return () => clearTimeout(timerRef.current);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      handleQuizEnd();
    }
  }, [timeLeft]);

  const startTimer = () => {
    timerRef.current = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
  };

  const handleAnswerSelect = (selectedAnswer) => {
    setUserAnswers([...userAnswers, selectedAnswer]);
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    // Typeform style: Move to the next question
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleQuizEnd();
    }
  };

  const handleQuizEnd = () => {
    clearTimeout(timerRef.current);
    navigate('/result', {
      state: { score, questions, userAnswers, timeTaken: 60 - timeLeft },
    });
  };

  if (questions.length === 0) {
    return <div>Loading questions...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Quiz</h2>
      <p className="mt-4">Time Left: {timeLeft} seconds</p>
      <Question
        question={questions[currentQuestion]}
        onAnswerSelect={handleAnswerSelect}
      />
      <p className="mt-4">
        Score: {score} / {questions.length}
      </p>
    </div>
  );
}

export default Quiz;
*/





import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Question from './Question';

function Quiz() {
  const location = useLocation();
  const { category, difficulty } = location.state || {};
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(60); // Initial time for the whole quiz
  const timerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      const apiUrl = `https://the-trivia-api.com/api/questions?${
        category ? `category=${category}&` : ''
      }${difficulty ? `difficulty=${difficulty}&` : ''}limit=10`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error('Error fetching questions:', error);
        // Handle error, e.g., display an error message
      }
    };

    fetchQuestions();
  }, [category, difficulty]);

  useEffect(() => {
    startTimer();
    return () => clearTimeout(timerRef.current);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      handleQuizEnd();
    }
  }, [timeLeft]);

  const startTimer = () => {
    timerRef.current = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
  };

  const handleAnswerSelect = (selectedAnswer) => {
    setUserAnswers([...userAnswers, selectedAnswer]);
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    // Typeform style: Move to the next question
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleQuizEnd();
    }
  };

  const handleQuizEnd = () => {
    clearTimeout(timerRef.current);
    navigate('/result', {
      state: { score, questions, userAnswers, timeTaken: 60 - timeLeft },
    });
  };

  if (questions.length === 0) {
    return <div>Loading questions...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Quiz</h2>
      <p className="mt-4">Time Left: {timeLeft} seconds</p>
      <Question
        question={questions[currentQuestion]}
        onAnswerSelect={handleAnswerSelect}
      />
      <p className="mt-4">
        Score: {score} / {questions.length}
      </p>
    </div>
  );
}

export default Quiz;
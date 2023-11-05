import React, { useState } from 'react';
import questions from '../data/questions.js';

const plane = require("../resources/plane.png")

const GameContainer = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSubmit = () => {
      const question = questions[currentQuestion];
      if (userAnswer && question && question.answer) {
          if (userAnswer.toLowerCase() === question.answer.toLowerCase()) {
              setScore(score + 1);
              setShowResult('Correct!');
          } else {
              setShowResult('Wrong answer');
          }
      } else {
          console.error('Unable to check answer. User answer or question is undefined.');
      }
  };

  const handleNextQuestion = () => {
      if (currentQuestion + 1 < questions.length) {
          setCurrentQuestion(currentQuestion + 1);
          setShowResult(false);
          setUserAnswer('');
      } else {
          // End of the game
          setShowResult(`Game Over! Your final score is ${score}`);
      }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white font-ubuntu">
      <div className="text-center">
        {questions[currentQuestion] && (
          <>
            <h2 className="text-4xl mb-4">{`${questions[currentQuestion].question}`}</h2>
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Enter True or False"
              className="bg-white text-black rounded-lg p-2 mb-4"
            />
            <button className="bg-blue-500 text-white rounded-lg p-2 mr-2" onClick={handleAnswerSubmit}>
              Submit
            </button>
          </>
        )}
        {showResult && <p className="mb-4">{showResult}</p>}
        <p className="mb-4">Score: {score}</p>
        <button className="bg-blue-500 text-white rounded-lg p-2" onClick={handleNextQuestion}>
          Next Question
        </button>
      </div>
      <img className='w-100 h-100 absolute bottom-10 left-1/2 transform -translate-x-1/2 object-contain' src={plane} alt="Plane"/>
    </div>
  );
};

export default GameContainer;

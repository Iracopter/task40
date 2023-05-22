import './App.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
import {AddButtons} from './components/AddButtons';
import { AddQuestion } from './components/AddQuestion';

const answers=[{
  id:1,
  first:"George Washington", 
  second:"Thomas Jefferson",
  third:"Thomas Edison", 
  forth:"I don't know",
  answer:"George Washington"},
  {
  id:2,
  first:"What?", 
  second:"pi",
  third:"42", 
  forth:"I don't know",
  answer:"42"
  },
  {
    id:2,
    first:"Yes!", 
    second:"No",
    third:"I don`t know", 
    forth:"?",
    answer:"Yes!"
  },
  {
    id:4,
    first:"C++", 
    second:"C#",
    third:"Python", 
    forth:"Javascript",
    answer:"Javascript"
  },
  {
    id:5,
    first:"Maybe", 
    second:"No",
    third:"Yes", 
    forth:"He's okay",
    answer:"Yes"
  }
];

const questions=[{
  id:1,
  text:"Who was the first President of the United States?"
},
{
  id:2,
  text:"What is the answer to the Ultimate Question of Life, the Universe, and Everything?"
},
{
  id:3,
  text:"Do you love to code?"
},
{
  id:4,
  text:"What's the best programming language?"
},
{
  id:5,
  text:"Is Jason Chan Awesome?"
}];



function App() {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(null);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleCounterChange = (counter) => {
    setResult(counter);
  };

  useEffect(() => {
    if (showResult) {
      setShowResult(true);
    }
  }, []);

  return (
    <div className="App">
      {showResult ? (
      <div>
        <h1 className='questionText'>Your result is:</h1>
        <p className='questionText'>{result}</p>
      </div>) : 
      (
        <div>
        <AddQuestion items={questions} currentIndex={currentQuestionIndex}/>
        <AddButtons props={answers} handleNextQuestion={handleNextQuestion} currentIndex={currentQuestionIndex} onCounterChange={handleCounterChange}/>
        </div>
        )}
    </div>
  );
}

export default App;

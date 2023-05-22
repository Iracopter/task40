import { CheckRightAnswer } from "./CheckRightAnswer";

export function AddButtons({ props, handleNextQuestion, currentIndex, onCounterChange }) {
  const currentAnswer = props[currentIndex];

const handleButtonClick = (selectedAnswer) => {
    const Counter = CheckRightAnswer(selectedAnswer, currentAnswer.answer);
    console.log("Is answer correct?", Counter);
    
    handleNextQuestion();
    onCounterChange(Counter);
};


  return (
    <div className="buttonHolder">
      <button onClick={() => handleButtonClick(currentAnswer.first)}>{currentAnswer.first}</button>
      <button onClick={() => handleButtonClick(currentAnswer.second)}>{currentAnswer.second}</button>
      <button onClick={() => handleButtonClick(currentAnswer.third)}>{currentAnswer.third}</button>
      <button onClick={() => handleButtonClick(currentAnswer.forth)}>{currentAnswer.forth}</button>
    </div>
  );
}

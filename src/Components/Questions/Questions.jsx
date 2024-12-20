import  { useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../../Context/StateComp';
import { useContext } from "react";
import { Button } from 'primereact/button';
import { PrimeReactProvider } from 'primereact/api';
import '../../styles/HomeStyles.css';

function Questions() {
  
  const { user, numberQuestions, FinalScore, setCurrentScore, currentScore } = useContext(UserContext);

  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`https://opentdb.com/api.php?amount=${numberQuestions}`);
        setQuestions(response.data.results);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchQuestions();
  }, []);

  const updateScore = () => {
    if (selectedAnswer === questions[currentQuestionIndex]?.correct_answer) {
        setCurrentScore((prevScore) => prevScore + 1);

    }
      
  };


  const handleNextQuestion = () => {

    if ((currentQuestionIndex + 1) === questions.length) {
      console.log('Se acabaron las preguntas');
      alert('Fin del juego');
      FinalScore();
      return;
    }

    

    updateScore();
    setSelectedAnswer(null);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

  };


  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const decodeHtml = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  return (
    <PrimeReactProvider>
    <div className="home">
      <h1 className='trivia'>Trivia Questions</h1>
      <h2>Welcome, {user}!</h2>
      <p>Score: {currentScore}</p>
      {questions.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h3 className='pregunta'>Pregunta número: {currentQuestionIndex + 1}</h3>
          <h2>{decodeHtml(questions[currentQuestionIndex].question)}</h2>
          <p>Category: {questions[currentQuestionIndex].category}</p>
          <p>Difficulty: {questions[currentQuestionIndex].difficulty}</p>
          <div>
            {console.log(questions[currentQuestionIndex].correct_answer)}
            <select
              value={selectedAnswer || ''}
              onChange={(e) => handleAnswerSelect(e.target.value)}
            >
              <option value="" disabled>Select an answer</option>
              {[questions[currentQuestionIndex].correct_answer, ...questions[currentQuestionIndex].incorrect_answers]
                .sort()
                .map((answer, index) => (
                  <option key={index} value={answer}>
                    {decodeHtml(answer)}
                  </option>
                ))}
            </select>
            
          </div>
          <div>
          <br />
          <br />
            <Button onClick={handleNextQuestion} >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
    </PrimeReactProvider>
  );
}

export default Questions;
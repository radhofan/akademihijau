import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar'
import './Quiz.css'

function Quiz() {

  const questions = [
		{
			questionText: 'Apa nama bunga terbesar di dunia yang hanya ditemukan di Indonesia?',
			answerOptions: [
				{ answerText: 'Mawar Merah', isCorrect: false },
				{ answerText: 'Rafflesia Arnoldii', isCorrect: true },
				{ answerText: 'Bunga Anggrek', isCorrect: false },
				{ answerText: 'Bunga Matahari', isCorrect: false },
			],
		},
		{
			questionText: 'Hewan yang hanya dapat ditemukan di Pulau Sumatera dan terancam punah adalah?',
			answerOptions: [
				{ answerText: 'Harimau Sumatera', isCorrect: true },
				{ answerText: 'Gajah Sumatera', isCorrect: false },
				{ answerText: 'Orangutan Sumatera', isCorrect: false },
				{ answerText: 'Badak Jawa', isCorrect: false },
			],
		},
		{
			questionText: 'Spesies burung endemik yang hanya dapat ditemukan di Papua adalah??',
			answerOptions: [
				{ answerText: 'Cendrawasih', isCorrect: true },
				{ answerText: 'Jalak Bali', isCorrect: false },
				{ answerText: 'Merak', isCorrect: false },
				{ answerText: 'Burung Tekukur', isCorrect: false },
			],
		},
		{
			questionText: 'Tanaman yang dikenal dengan nama "Anggrek Hitam" dan merupakan endemik Indonesia adalah?',
			answerOptions: [
				{ answerText: 'Mawar', isCorrect: false },
				{ answerText: 'Melati', isCorrect: false },
				{ answerText: 'Tulip', isCorrect: false },
				{ answerText: 'Coelogyne Pandurata', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
  const [ready, setReady] = useState(false);

  const startQuiz = () => {
    setReady(true);
  };

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

  function restart(){
    setShowScore(false)
    setReady(false)
    setScore(0)
    setCurrentQuestion(0)
  }




  return (
    <div className='App'>
      <Navbar/>
      <div className='sl-footer'></div>
        <div className='Quizzapp'>
        {!ready ? ( // Render the "Are you ready?" page if not ready
        <div className='ready-section'>
          <h2>Are you ready to start the quiz?</h2>
          <button onClick={startQuiz}>Start Quiz</button>
        </div>
      ) : showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
          <button onClick={restart}>Restart</button>
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
            ))}
          </div>
        </>
      )}
      </div>
    <div className='sl-footer'></div>
    </div>
  )
}

export default Quiz
import React from 'react';
import './Question.css';

const Question = ({question, onClick}) => {
  const handleClick = (questionId, answerId) => {
    onClick(questionId, answerId)
  }
  return (
    <div className='my-5 mx-2'>
      <div className='question-text-container'>
        <p className='question-text'>{question.question}</p>
      </div>
      <div className='d-flex justify-content-between col-lg-8 col-md-10 col-sm-12 my-5 mx-auto'>
        {question.answers.map((answer, index) => (
          <button key={index} onClick={ () => handleClick(question.id, index) } className='btn btn-md btn-primary px-3'>
            {answer}
          </button>

        ))}
      </div>
    </div>
  )
}

export default Question

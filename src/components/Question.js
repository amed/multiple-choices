import React from 'react';
import './Question.css';

const Question = ({question, onClick}) => {
  const handleClick = (index) => {
    onClick(index)
  }
  return (
    <div className='my-5 mx-2'>
      <p className='question-text'>{question.question}</p>
      <div className='d-flex col-lg-8 col-md-10 col-sm-12 bg-warning'>
        s
      </div>
    </div>
  )
}

export default Question

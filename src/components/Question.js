import React from 'react';

const Question = ({question, onClick}) => {
  const handleClick = (index) => {
    onClick(index)
  }
  return (
    <div>
      {question.question}
    </div>
  )
}

export default Question

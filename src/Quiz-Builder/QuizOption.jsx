import React from 'react'

const QuizOption = ({option,index,answer,setAnswer}) => {
    const onChange=({target:{value}})=>setAnswer(value)
  return (
    <>
      <input 
      type="radio"
      onChange={onChange}
      checked={option===answer}
      name='answer'
      value={option}
      id={`option${index}`}
       />
       <label htmlFor={option}>{option}</label>
    </>
  )
}

export default QuizOption

import React from 'react'
import './Child.css'
const Child = ({count,counter}) => {
  const incrementButton=()=>{
    counter(count+1);
  }
  const decrementButton=()=>{
    counter(count-1);
  }
  const resetButton=()=>{
    counter(count * 0);
  }
  return (
    <div className='buttons'>
      <button  className='inc' onClick={incrementButton}>Increment</button>
        <button className='dec' onClick={decrementButton}>Decrement</button>
          <button className='reset'  onClick={resetButton}>reset</button>
    </div>
  )
}

export default Child

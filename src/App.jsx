import React,{useState} from 'react'
import Child from './Child.jsx'
import countImage from './assets/watch.jpg'
import './App.css'

const App = () => {
  const[count,setCount]=useState(0);

  return (
    <div className='App'>
      <img src={countImage} alt='' className='clock'/>
      <h1 className='heading'> Counter Application</h1>
    <p className='count'>{count}</p>
      <Child count={count} counter={setCount}/>
    </div>
  )
}

export default App

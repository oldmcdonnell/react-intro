import { Link } from "react-router-dom"
import { useState } from "react";

const Title = () => {
  return (
    <h1>
      Hello World!
    </h1>
  )
}


const CounterButton = () => {
  
  const [count, setCount] = useState(0);
  console.log(count)
  const handleClick = () => {
    const newCount = count+1
    setCount(newCount) 
  }
  return(
    <button onClick={handleClick} className="dark:color-white rounded-lg bg=purple-700 px-2 py-1 fous:ring active:bg-purple-600">click count: {count}</button>
  )
}


function App() {
  return (
    <div 
      className="bg-primary h-100 p-5"
      style={{ color: 'white' }}
    > 
    <CounterButton />
    <div></div>
      <Link className="text-light" to='/about'>About</Link>
      <Title />

    </div>
  )
}


export default App

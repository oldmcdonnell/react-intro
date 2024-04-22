import { Link } from "react-router-dom"
import { useState } from "react";

const Title = () => {
  return (
    <h1>
      Hello World!
    </h1>
  )
}

const changeColor = () => {
  let colors = ['red', 'blue', 'green', 'pink']
  let randomColor = colors[Math.floor((Math.random() * colors.length))]
  return randomColor
  }  


const CounterButton = () => {
  
  const [count, setCount] = useState(0);
  let colors = ['red', 'blue', 'green', 'pink', 'orange', 'purple', 'yellow', 'black', 'red', 'blue', 'green', 'pink', 'orange', 'purple', 'yellow', 'black',]
  console.log(count)
  const handleClick = () => {
    const newCount = count+1
    setCount(newCount) 
  }
  return(
    <button onClick={handleClick} style={{color: colors[count]}} className="dark:color-white rounded-lg bg=purple-700 px-2 py-1 fous:ring active:bg-purple-600">click count: {count}</button>
  )
}

const Navbar = () => {
  <div className="container-fluid">
  <a className="navbar-brand"></a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation"></button>
</div>
}

function App() {
  return (
    <div 
      className="bg-primary h-100 p-5"
      style={{ color: 'white' }}
    > 
    <CounterButton />
    <div></div>
      <Title />
      <Link className="text-light" to='/about'>About</Link>
      <p>
      <Link className="text-light" to='/contacts'>contacts</Link>
      </p>
    </div>
  )
}


export default App

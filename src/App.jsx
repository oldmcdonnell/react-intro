import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
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
      if (newCount>10){
        setCount(newCount) 
      } else {
        <dev>too much</dev>
        setCount(newCount) 
      }

  }
  return(
    <button onClick={handleClick} style={{color: colors[count]}} className="dark:color-white rounded-lg bg=purple-700 px-2 py-1 fous:ring active:bg-purple-600">click count: {count}</button>
  )
}

/*-
const Navbar = () => {
<Navbar bg="dark" data-bs-theme="dark">
  <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Link className="text-light" to='/about'>About</Link>
      <Link className="text-light" to='/contacts'>contacts</Link>
    </Nav>
  </Container>
</Navbar>
}
-*/

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

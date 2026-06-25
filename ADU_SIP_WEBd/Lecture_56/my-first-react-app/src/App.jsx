import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Student from './components/Student'
import ProductCard from './components/ProductCard'


function greet(){
  alert("Welcome");
}

function App() {
  // const [count,setCount] = useState(0);
  const [name,setName] = useState("Gaurav");
  const [isLoggedIn,setIsLoggedIn] = useState(false);

  const [darkMode,setDarkMode] = useState(false);

  //   function handleClick() {
  //   setCount(count + 1);
  // }
  // const skills = ["React","JS","Node","MongoDB"];
  // const students = {
  //   name : "Rahul",
  //   age : 28
  // }

  return (
    <>
  {/* <Student name = "Gaurav" age = {23}/>
  <Student name = "Rahul" age = {25}/> 
  <Student name = "Surya" age = {26}/>
  <Student name = "Abhishek" age = {28}/> */}
  {/* <Student skills = {skills}/> */}
  {/* <Student data = {students}/> */}
  {/* <Student sayHello = {greet}/> */}
      {/* <button onClick={handleClick}>
      Clicked {count} times
    </button> */}
    {/* <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)}>Increase</button>
     <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button> */}
      {/* <h1>{name}</h1>
      <button onClick={() => setName("Rahul")}>Change</button> */}

      {/* <h1>{isLoggedIn ? "Welcome" : "Pls Login"}</h1>
      <button onClick={() => setIsLoggedIn(true)}>Login</button> */}

      <h1>{darkMode}</h1>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
    </>
  )
}

export default App

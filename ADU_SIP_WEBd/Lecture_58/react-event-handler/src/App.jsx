import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [show,setShow] = useState(false);
  // const isAdmin = false;
  // const isLoggedIn = false;
  // function sayHello(){
  //   alert("Hello")
  // }

  // const [name,setName] = useState("");
  // function greet(name){
  //   alert("Hello " + name);
  // }

  // function handleSubmit(event){
  //   event.preventDefault();
  //   alert("Form Submitted")
  // }

  return (
  <>
   {/* <button onClick={() => alert("Hello")}>Click me</button> */}
   {/* <button onDoubleClick={() => greet("Gaurav")}>click</button> */}
   {/* <h1 onMouseEnter={() => console.log("Mouse Entered")}>Hover over me</h1> */}
   {/* <input 
   type='text'
   onChange={(event) => {setName(event.target.value)}}
   /> */}

   {/* <h1>Hello {name}</h1> */}
{/* 
   <form onSubmit={handleSubmit}><input type="text" 
   onChange={(event) => {setName(event.target.value)}}
   placeholder='Enter Name'/>
   <button type='submit'>Submit</button>

   </form>

    <h1>Hello {name}</h1> */}

    {/* {isLoggedIn ? "Welcome" : "Pls LogIn"} */}
    {/* <h1>Dashboard</h1>

    {isAdmin && <button>Delete User</button>} */}

    <input type={show ? "text" : "password"}/>

    <button onClick={() => setShow(!show)}>{show ? "Hide Password" : "Show Password"}</button>

    </>
  )
}

export default App

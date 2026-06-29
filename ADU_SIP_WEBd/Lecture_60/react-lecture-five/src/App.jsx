import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes ,Link} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Navbar from './Navbar'

function App() {
  // const [count, setCount] = useState(0)
  // const [users,setUsers] = useState([]);


  // useEffect(() => {
    
  // fetch("https://jsonplaceholder.typicode.com/users")
  // .then((res) => {
  //   console.log(res);
  //   return res.json()
  // })
  // .then((data) => {
  //   setUsers(data);
  // })
  // },[]);


  return (
   

    <>
    <Navbar/>
    <br/>
     <br/>
      <br/>
       <br/>
        <br/>

    
   <Routes>
      <Route
      path='/'
      element = {<Home/>}
      />

       <Route
      path='/about'
      element = {<About/>}
      />

       <Route
      path='/contact'
      element = {<Contact/>}
      />
    </Routes>
    
    </>
  )
}

export default App

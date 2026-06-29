import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Timer from "./Timer";

function App() {
  // const fruits = ["Apple","Banana","Orange","Guava"]
  // const [name,setName] = useState("")
  // console.log("Fetching data....");

  // const[count , setCount] = useState(0);

  // useEffect(() => {
  //   console.log("Count Changed: ",count);
  // },[count]);

  const [show,setShow] = useState(true);

  return (
    <>
      {/* {fruits.map((fruit,index) => (
      <h2>{index} = {fruit}</h2>
     ))} */}

      {/* <input type="text" value={name} placeholder='name' onChange={(e)=> setName(e.target.value)}/>

     <button onClick={() => setName("")}>Clear</button>

     <h1>{name}</h1> */}

     {/* <h1>{count}</h1>

     <button onClick={() => setCount(count + 1)}>Increase</button> */}

     <button onClick={() => setShow(!show)}>
      {show ? "Hide Timer" : "Show Timer"}
     </button>

     {show && <Timer/>}
    </>
  );
}

export default App;

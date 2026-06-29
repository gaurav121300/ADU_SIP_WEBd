import { useEffect, useState } from "react";

function Timer(){
    const [second,setSeconds] = useState(0);
    useEffect(() => {
        console.log("Timer Started");

        const id = setInterval(() => {
            setSeconds((prev) => prev + 1);
        },1000);

        return () => {
            console.log("Cleanup Called");
            clearInterval(id);
        }
    },[]);

    return <h2>Seconds : {second}</h2>
}

export default Timer;
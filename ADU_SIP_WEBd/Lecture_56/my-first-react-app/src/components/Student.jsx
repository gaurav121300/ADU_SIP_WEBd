function Student({name,age}){
    return(
        <div>
            <h2>{name}</h2>
            <p>Age : {age}</p>
            {/* <h1>{props.skills.join(", ")}</h1> */}
            {/* <h2>{props.data.name}</h2>
            <p>{props.data.age}</p> */}
            {/* <button onClick={props.sayHello}>Click Me!</button> */}
        </div>
    )
}

export default Student;
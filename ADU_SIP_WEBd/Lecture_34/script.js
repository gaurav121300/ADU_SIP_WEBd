// let title = document.getElementById("title");

// let btn = document.getElementById("btn");

// btn.addEventListener("mouseover",
//     ()  => {
//         btn.style.backgroundColor = "yellow";
//     }
// )

// btn.addEventListener("mouseout",
//     ()  => {
//         btn.style.backgroundColor = "";
//     }
// )

// document.addEventListener("keydown",() => {
//     console.log("key pressed");
// })

// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log(event.target);
//     console.log(event.type);
// })

// document.addEventListener("keydown", function(event) {
//     console.log(event.key);
// })

//input event

// let input = document.getElementById("name");

// input.addEventListener("input",() => {
//     console.log(input.value);
// })

// let form = document.getElementById("form");
// form.addEventListener("submit",function(event) {
//     event.preventDefault();
//     console.log("submitted");
// })

// let count = 0;

// let heading = document.getElementById("count");

// let btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//     count++;

//     console.log(count);
//     heading.innerText = count;
// })


//Live typing

// let text = document.getElementById("text");

// let output = document.getElementById("output");

// text.addEventListener("input",() => {
//     output.innerText = text.value;
// })


// const para = document.createElement("p");

// para.textContent = "Hello";

// document.body.appendChild(para);

const div = document.querySelector("div");

const h1 = document.createElement("h1");
const p = document.createElement("p");

h1.textContent = "Heading"
p.textContent = "New Paragraph";

// div.appendChild(p);

div.append(h1,p);
// let title = document.getElementById("title");

// title.style.color = "red";

// title.style.backgroundColor = "yellow";

// title.style.fontSize = "40px"

// title.style.border = "2px solid black"

// let img = document.getElementById("myImage")
// img.setAttribute("width","100");
// img.setAttribute("height","100");

// console.log(img.getAttribute("src"));

// let p = document.getElementById("para");
// p.setAttribute("class","red");

// console.log(p.innerText);

// let btn = document.getElementById("btn");

// btn.addEventListener("click",function(){
//     alert("Button Clicked");
// })

// btn.addEventListener("click",() => {
//     console.log("Clicked");
// })

let title = document.getElementById("title");
let btn = document.getElementById("btn");

btn.addEventListener("click",() => {
    title.innerText = "Welcome Students";
    document.body.style.backgroundColor = "lightblue";
})

btn.addEventListener("mouseover", () => {
    title.style.fontSize = "100px";
})
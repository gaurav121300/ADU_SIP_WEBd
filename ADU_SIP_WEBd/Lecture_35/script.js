// const btn = document.getElementById("btn");

// btn.addEventListener("click",() => {
//     document.getElementById("msg").remove();
// })

// const oldP = document.querySelector("p");

// const newP = document.createElement("p");

// newP.textContent = "New Paragraph";

// oldP.replaceWith(newP);

// const p = document.getElementById("demo");
// const copy = p.cloneNode(true);

// document.body.append(copy);

//parentElement

// const p = document.querySelector("p");
// console.log(p.parentElement);

// //children

// const div = document.getElementById("parent");
// console.log(div.children);

// let para = document.getElementById("para");

// // para.classList.add("active");
// // console.log(para);

// // para.classList.remove("active");
// // console.log(para);

// para.classList.toggle("active")
// console.log(para);
// // if class exist -> remove
// // if class not exist -> add the class

// let contain = para.classList.contains("active");
// console.log(contain);

const btn = document.getElementById("toggleBtn");

btn.addEventListener("click",() => {
    document.body.classList.toggle("dark");
})
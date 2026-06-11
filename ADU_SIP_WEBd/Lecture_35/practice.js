const btn = document.getElementById("btn");
const container = document.getElementById("container");

let count = 1;

btn.addEventListener("click" , () => {
    const para = document.createElement("p");
    para.textContent = `Paragraph ${count} created`;
    container.append(para);
    count++;
})
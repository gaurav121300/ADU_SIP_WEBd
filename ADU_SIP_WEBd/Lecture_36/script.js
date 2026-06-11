// const form = document.getElementById("form");

// form.addEventListener("submit",(event) => {
//     const name = document.getElementById("name").value; 
//     const error = document.getElementById("error");
//     const email = document.getElementById("email");

//     if(name.trim() === ""){
//         error.textContent = "Name Required";
//         event.preventDefault();
//     }

//     if(!email.includes("@")){
//         alert("Email Invalid ");
//         event.preventDefault();
//     }
// })

// localStorage.setItem("city","Delhi");
// localStorage.setItem("name","gaurav")

// const city = localStorage.getItem("city");

// console.log(city);

// localStorage.removeItem("city");

// //clear everything 
// localStorage.clear();

const student = {
    name : "Gaurav",
    age : 26
};

localStorage.setItem("data1",
    JSON.stringify(student)
)

const data = JSON.parse(localStorage.getItem("data1"));
console.log(data);

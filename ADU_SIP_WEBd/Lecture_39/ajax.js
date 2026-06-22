document.getElementById("btn").addEventListener("click",() => {
    let xhr = new XMLHttpRequest();

    xhr.open("GET","https://jsonplaceholder.typicode.com/users") //get request

    //receiving response
    xhr.onload = function(){
        console.log("second")
        // console.log(xhr.responseText);
        let users = JSON.parse(xhr.responseText);
        console.log(users[0].name);  //access name

        users.forEach(user => {
            console.log(user.name)
        })
    }

    console.log("first");
    xhr.send();  //sending request
})
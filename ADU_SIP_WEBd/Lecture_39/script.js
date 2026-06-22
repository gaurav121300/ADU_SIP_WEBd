let btn = document.getElementById("loadBtn");

btn.addEventListener("click",() => {
    document.getElementById("output").innerHTML = "Loading...."
    setTimeout(() => {
        document.getElementById("output").innerHTML = `
        <h2>Students</h2>
        <p>Supriya</p>
        <p>Sagar</p>
        <p>Bhaskar</p>
        <p>Chaturya</p>
        `
    },3000)
})
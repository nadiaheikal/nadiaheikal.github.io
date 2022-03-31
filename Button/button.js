let change = document.getElementById("body")
// Storing info in variable change (look at webpage and get the html element of body)
let theTxt = document.querySelector("h1")
let theButton = document.getElementById("clickk")
theButton.addEventListener('click', clickbutton)
function clickbutton() {
    console.log("YOU CLICKED IT!!")
    change.style.background = "orange";
    theTxt.textContent = "Orange you glad you clicked!"
}

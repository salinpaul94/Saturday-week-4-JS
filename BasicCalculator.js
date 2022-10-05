
let displayElement = document.getElementById("display");

let buttons = document.getElementsByClassName("btn");

buttons = Array.from(buttons);
console.log(buttons);

buttons.map((eachBtn) => {
    eachBtn.addEventListener("click", (e) => {
       let currentText =  e.target.innerText;

       switch(currentText) {
        case "C":
            displayElement.innerText = ""
            break;
        case "=":
            if(displayElement.innerText === "") {
                alert("Nothing Entered")
            } else {
                displayElement.innerText = eval(displayElement.innerText);
            }
            break;
        case "Back":
            displayElement.innerText = displayElement.innerText.substring(0,displayElement.innerText.length-1);
            break;
        default:
            displayElement.innerText = displayElement.innerText + currentText;
            break;
       }
    })
})
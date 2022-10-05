
let displayElement = document.getElementById("display");

function clearDisplay() {
    displayElement.innerText = ""
}

function addCharacter(chr) {
    if(displayElement.innerText === null || displayElement.innerText == "0"){
        displayElement.innerText = chr
    } else {
        displayElement.innerText = displayElement.innerText + chr;
    }
}

function changeSign() {
    if(displayElement.innerText.substring(0,1) == "-") {
        displayElement.innerText = displayElement.innerText.substring(1,displayElement.innerText.length)
    } else {
        displayElement.innerText = "-" + displayElement.innerText;
    }
}

function deleteLastCharacter() {
    displayElement.innerText = displayElement.innerText.substring(0,displayElement.innerText.length-1);
}

function checkNum() {
    if(displayElement.innerText === "")
        alert("Nothing entered")
    else{
        let str = displayElement.innerText;
            let each = str.substring(str.length-1);
                if(
                    each == "/" ||
                    each == "*" ||
                    each == "+" ||
                    each == "." ||
                    each == "-" ||
                    each == "(" ||
                    each == ")"
                ) {
                    console.log("false");
                    alert("Invalid Input")
                    return false;
                }
        return true;
    } 
}

function compute() {
    try {
        displayElement.innerText = eval(displayElement.innerText);
    } catch {
        alert("Invalid Input");
    }
    
}

function sqrt() {
    displayElement.innerText = Math.sqrt(displayElement.innerText);
}

function square() {
    displayElement.innerText = Math.pow(displayElement.innerText, 2);
}

function exp() {
    displayElement.innerText = Math.exp(displayElement.innerText);
}

function log() {
    displayElement.innerText = Math.log(displayElement.innerText);
}

function cos() {
    displayElement.innerText = Math.cos(displayElement.innerText);
}

function sin() {
    displayElement.innerText = Math.sin(displayElement.innerText);
}

function tan() {
    displayElement.innerText = Math.tan(displayElement.innerText);
}

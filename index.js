const numberButtons = document.querySelectorAll("button");
let expression = [];
numberButtons.forEach((button) => {
    button.addEventListener('click', function () {
        const display = document.querySelector('#expression-el');
        if (!(isNaN(button.id)) || button.id == ".") {
            expression.push(button.id);
            let number = button.id;
            display.textContent += number;
        }else {
            if (button.id == "radic") {
                display.innerHTML += '&radic;';
                expression.push('radic');
            }else if (button.id == "%") {
                display.textContent += "%";
                expression.push("%");
            }else if (button.id == "/") {
                display.innerHTML += "&divide;";
                expression.push('/');
            }else if (button.id == "neg") {
                expression.push("-");
                display.textContent += '-';
            }else if (button.id == "*") {
                display. innerHTML += "&times;";
                expression.push("*");
            }else if (button.id == "-") {
                display.textContent += "-";
                expression.push('-');
            }else if (button.id == "+") {
                display.textContent += "+";
                expression.push('+');
            }else if (button.id == "=") {
                equal();
            }else if (button.id == "dell") {
                display.textContent = display.textContent.slice(0, -1);
                expression.pop();
            }else if (button.id == "ca") {
                display.textContent = '';
                expression = [];
            }
        }

    })
})
function equal() {
    console.log(expression)
}

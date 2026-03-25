const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

function calculate() {
    try {
        if (display.value === "") return;
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

function appendValue(value) {
    const lastChar = display.value.slice(-1);
    if ("+-*/".includes(lastChar) && "+-*/".includes(value)) {
        return;
    }
    display.value += value;
}
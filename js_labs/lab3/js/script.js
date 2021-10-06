function calculate_parametr() {
    let width = parseInt(document.getElementById("width").value);
    let height = parseInt(document.getElementById("height").value);
    const p = document.getElementById("parametr");
    const pl = document.getElementById("plocha");
    const d = document.getElementById("diagonal");
    p.innerText = (width + height) * 2;
    pl.innerText = width * height;
    d.innerText = Math.sqrt(width * width + height * height);
}
let alphabet = ["а", "б", "в", "г", "ґ", "д", "е", "є", "ж", "з", "и", "і", "ї", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ь", "ю", "я"];
function keyBoard() {
    let keyboard = "";
    alphabet.map((letter, index) => {
        if (index % 12 === 0) keyboard += "<br>"
        keyboard += `<button style="width:20px" onclick="clickLetter('${letter}')">${letter}</button>`
    })
    keyboard += `<button onclick="addLetter(' ')">Space</button>`
    document.getElementById("key_board").innerHTML = keyboard;
}

function clickLetter(letter) {
    document.getElementById("text").value += letter;
}

function reset() {
    document.getElementById("text").value = "";
}
let english = false;
function changeLanguage() {
    if (!english) {
        alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        english = true;
    } else {
        alphabet = ["а", "б", "в", "г", "ґ", "д", "е", "є", "ж", "з", "и", "і", "ї", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ь", "ю", "я"];
        english = false;
    }
    keyBoard();
}

let images = ["https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
    , "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg", "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"];
let index_img = 0;

function left() {
    index_img--;
    if (index_img < 0) {
        index_img = images.length - 1;
    }
    document.getElementById("image").src = images[index_img];
}

function right() {
    index_img++;
    if (index_img == images.length) {
        index_img = 0;
    }
    document.getElementById("image").src = images[index_img];
}

let score = 0, taskNumber = 1, firstNumber, secondNumber;

function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

function check() {
    let userInput = document.getElementById("number");
    userInput.readOnly = true;
    let resultMessage = document.getElementById("resultMessage");
    if ((firstNumber * secondNumber) === +userInput.value) {
        resultMessage.innerText = "Все вірно !";
        return true;
    } else {
        resultMessage.innerText = `Невірно, правильний результат ${firstNumber * secondNumber}`;
        return false;
    }

}

function nextTask() {
    let userInput = document.getElementById("number")
    let correct = check();
    if (correct) {
        score++;
    }
    taskNumber++;
    firstNumber = getRandomArbitrary(1, 10);
    secondNumber = getRandomArbitrary(1, 10);

    if (taskNumber === 10) {
        alert(`Молодчинка ! Твій результат ${parseInt((score / 10) * 100)}`)
        location.reload();
    }

    userInput.value = "";
    userInput.readOnly = false;
    document.getElementById("resultMessage").innerText = "";
    document.getElementById("multiplyExpression").innerText = `${firstNumber} * ${secondNumber} =`;
    document.getElementById("scoreMessage").innerText = `Загальний рахунок: ${parseInt((score / 10) * 100)}% (${score} правильних відповідей з 10)`;
}

const toggler = document.getElementsByClassName("caret");
let i;

for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
    });
}
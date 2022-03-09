const upperAplhabet = [... "ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const lowerAlphabet = [... "abcdefghijklmnopqrstuvwxyz"];
const numeric = [... "0123456789"];
const symbols = [... "!%@/?\\*~#"];

let passwordLength = 10;

let pEl1 = document.getElementById("p-el1");
let pEl2 = document.getElementById("p-el2");
let pEl3 = document.getElementById("p-el3");
let pEl4 = document.getElementById("p-el4");

let passwordLengthEl = document.getElementById("passwordlength-el")
let range = document.getElementById("myRange");
console.log(range.value)

// generate random character
function randomGenerator() {
    let randomChar;
    let selector = randomSelector();
    switch (selector) {
        case 1: randomChar = upperAplhabet[Math.floor(Math.random()*upperAplhabet.length)];
        break;
        case 2: randomChar = lowerAlphabet[Math.floor(Math.random()*lowerAlphabet.length)];
        break;
        case 3: randomChar = numeric[Math.floor(Math.random()*numeric.length)];
        break;
        case 4: randomChar = symbols[Math.floor(Math.random()*symbols.length)];
        break;
        default: break;
    }

    return randomChar;
}

// functions randomly decides wether an upperAlphabet, a lowerAlphabet, a numeric or a symbol should be generated
function randomSelector() {
    return Math.floor((Math.random() * 4) + 1);
}

// generate a random password
function generatePassword() {
    let password = "";
    for(let i = 0; i < passwordLength; i++) {
        password += randomGenerator();
    }
    return password;
}

// display the password length changes through the slider
function changeLength() {
    passwordLength = range.value;
    passwordLengthEl.textContent = "Password Length: " + passwordLength
}

// Display 4 password on the paragraphs
function displayPassword() {
    pEl1.textContent = generatePassword();
    pEl2.textContent = generatePassword();
    pEl3.textContent = generatePassword();
    pEl4.textContent = generatePassword();
}


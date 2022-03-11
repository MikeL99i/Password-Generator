// possible characters
const upperAplhabet = [... "ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const lowerAlphabet = [... "abcdefghijklmnopqrstuvwxyz"];
const numeric = [... "0123456789"];
const symbols = [... "!%@/?\\*~#"];

let passwordLength = 10;

// elements for displaying generated passwords
const pEl1 = document.getElementById("p-el1");
const pEl2 = document.getElementById("p-el2");
const pEl3 = document.getElementById("p-el3");
const pEl4 = document.getElementById("p-el4");

// elements for slider and displaying passwordlength
const passwordLengthEl = document.getElementById("passwordlength-el");
const range = document.getElementById("myRange");
//console.log(range.value);

const upperCheckbox = document.getElementById("uppercasebox");
const numericCheckbox = document.getElementById("numericbox");
const lowerCheckbox = document.getElementById("lowercasebox");
const symbolsCheckbox = document.getElementById("symbolsbox")

// generate random character
function randomGenerator() {
    let randomChar;
    let selector = randomSelector();
    selector = checkboxOnOrOff(selector)
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

// check if the chechkbox is true or false
function check(checkboxes) {
    if(checkboxes.checked === true)
        return true;
    else
        return false;
}

// provide a solution if the randomnize selector is turned off through the checkboxes
// using bitshifting to break out of the loop
function checkboxOnOrOff (selection) {
    let loop = 15; // loop variable 1111
    do {
        if(selection === 1) {
            if(check(upperCheckbox) === false) {
                selection++;
                loop = loop >> 1;
            }
            else
                return selection;
        }
        if(selection === 2) {
            if(check(lowerCheckbox) === false) {
                selection++;
                loop = loop >> 1;
            }
            else
                return selection;
        }
        if(selection === 3) {
            if(check(numericCheckbox) === false) {
                selection++;
                loop = loop >> 1;
            }
            else
                return selection;
        }
        if(selection === 4) {
            if(check(symbolsCheckbox) === false) {
                selection = 1
                loop = loop >> 1;
            }
            else
                return selection;
        }
    }while(loop != 0);
    return 0;
}

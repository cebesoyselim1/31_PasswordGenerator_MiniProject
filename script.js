const clipboard = document.querySelector(".clipboard-text");
const clipboardBtn = document.querySelector(".clipboard-btn");

const passwordLength = document.querySelector(".password-length");
const uppercase = document.querySelector(".uppercase");
const lowercase = document.querySelector(".lowercase");
const numbers = document.querySelector(".numbers");
const symbols = document.querySelector(".symbols");
const cBx = document.querySelectorAll(".cBx");
const generatePassBtn = document.querySelector(".generate-password");

let checked = [true,true, true, true];

function createRndUppercase(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function createRndLowercase(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function createRndNumbers(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function createRndSymbols(){
    let symbols = [":",";","<",">","=","?","-","_","(",")","[","]","/"];
    return symbols[Math.floor(Math.random() * symbols.length)];
}

cBx.forEach((checkbox) => {
    checkbox.addEventListener("click", (e) => {
        if(e.target.classList.contains("uppercase")){
            if(checked[0] == true){ checked[0] = false}
            else {checked[0] = true}
        }   
        if(e.target.classList.contains("lowercase")){
            if(checked[1] == true){ checked[1] = false}
            else {checked[1] = true}
        }
        if(e.target.classList.contains("numbers")){
            if(checked[2] == true){ checked[2] = false}
            else {checked[2] = true}
        }
        if(e.target.classList.contains("symbols")){
            if(checked[3] == true){ checked[3] = false}
            else {checked[3] = true}
        }
    })
})

generatePassBtn.addEventListener("click", (e) => {
    let password = "";

    if(checked.filter(check => check == true).length != 0){
        let index;
        for(let ct = 0; ct < passwordLength.value; ct++){
            while(true){
                index = Math.floor(Math.random() * 4);
                if(checked[index]){break;}
            }
            
            switch(index){
                case 0:
                    password += createRndUppercase();
                    break;
                case 1:
                    password += createRndLowercase();
                    break;
                case 2:
                    password += createRndNumbers();
                    break;
                case 3:
                    password += createRndSymbols();
                    break;
            }
        }
    }
    clipboard.innerHTML = password;
    e.preventDefault();
})

clipboardBtn.addEventListener("click", (e) => {
    if(clipboard.value != ""){
        let textarea = document.createElement("textarea");
        textarea.value = clipboard.textContent;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
    }
    e.preventDefault();
})




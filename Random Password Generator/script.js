const inputValue = document.querySelector('#inputValue');
const inputSlider = document.getElementById('rangeSlider');
const sliderValue = document.getElementById('sliderValue');
const passwordGenerateBtn = document.querySelector('#generate-pass-button');
const lowercaseEl = document.querySelector('#lowercase');
const uppercaseEl = document.querySelector('#uppercase');
const numbersEl = document.querySelector('#numbers');
const symbolsEl = document.querySelector('#symbols');
const copyPassword = document.querySelector('#copyPassword');

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "@#$%^&*<>,.";

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input',()=>{
    sliderValue.textContent = inputSlider.value;
})

const generatePassword = ()=>{
    const length = inputSlider.value;
    let characters = "";
    let password = "";

    characters += lowercaseEl.checked ? lowercase : "";
    characters += uppercaseEl.checked ? uppercase : "";
    characters += numbersEl.checked ? numbers : "";
    characters += symbolsEl.checked ? symbols : "";

    console.log(characters);
    for(let i=0;i<length;i++){
        password += characters.charAt(Math.floor(Math.random()*characters.length));
    }
    return password;
}

passwordGenerateBtn.addEventListener('click',()=>{
    inputValue.value = generatePassword();
})

copyPassword.addEventListener('click',()=>{
    if(inputValue.value != "" || inputValue.value.length>10){
        navigator.clipboard.writeText(inputValue.value);
        copyPassword.innerText = "check";

        setTimeout(()=>{
            copyPassword.innerText = "content_copy";
        },3000);
    }
})



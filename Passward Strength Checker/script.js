const passward = document.getElementById('Passward');
const meassage = document.getElementById('display-strength');
const strength = document.getElementById('strength');
const showPassButton = document.getElementById('show-passward');
const strenthChecker = ()=>{
    const passwardValue = passward.value;
    const passwardStrength = passwardValue.length;
    let strenthValue = "";
    if(passwardValue==0){
        strenthValue = "";
    }
    else if(passwardStrength<=5){
        strenthValue = "Weak";
    }else if(passwardStrength<8){
        strenthValue = "Medium";
    }else{
        strenthValue = "Strong";
    }
    
    strength.textContent = strenthValue;
    meassage.style.display = 'block';
}
passward.addEventListener('input',strenthChecker);
showPassButton.addEventListener('click',()=>{
    const passwardType = passward.getAttribute('type');
    // console.log(passwardType);
    if(passwardType==="password"){
        passward.setAttribute('type','text');
    }else{
        passward.setAttribute('type','password');
    }
})
const message = document.querySelector('.message');
const text = document.getElementById('text');
const send = document.getElementById('send');
const clear = document.getElementById('clear');

send.addEventListener('click',deliver);
function deliver(){
    let TextValue = text.value;
    message.innerHTML = TextValue;
    text.value = "";
}

clear.addEventListener("click",clearfunc);

function clearfunc(){
    message.innerHTML = ""
}
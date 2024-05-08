// set initial count
let count = 0;
//select value and button
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const classes = e.currentTarget.classList;
        if(classes.contains("decrease")){
            count--;
        }else if(classes.contains("increase")){
            count++;
        }else{
            count = 0;
        }
        value.innerHTML = count;
    })
})
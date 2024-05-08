/*function add(a,b){
    b(8);
    //console.log(a+b);
    return a+b;
}
const x = add(4,function(x){
    console.log(x);
});
*/

function print(name){
    alert(`name is ${name}`)
}
function processprompt(cb){
    const name = prompt("enter your name");
    cb(name);
}
processprompt(print);

/*let names = ["mayank",12,true,false,100];
console.log(names);
*/
/*
var x = new Array(10,20,false);
console.log(x);
console.log(x[1]);
*/
function user(name){
    this.name = name;
    this.func1 = function(){
        console.log(this.name);
    }
}
var mayank = new user("mayank");            //creating object
mayank.func1();                                //calling

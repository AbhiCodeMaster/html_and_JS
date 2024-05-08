/*const arr = [1,2,3,4,"india"];

arr.forEach(function (i){      //foreach loop
    console.log(i);
})

//     || this is the example of forEach loop
//     \/
const arr2 = [1,2,3,4,"india"];

arr.forEach((i)=>{
    console.log(i);
})
*/arr2 = [1,2,3,4,"india"];
// for of loop => array
for(let i of arr2){
    console.log(i);
}

//for in loop => object

const user = {
    name : "abhinav",
    age : 23,
    count : 10
}

//iteration for values
for(let i in user){
    console.log(i);
}

//iteration of values

for(let j in user){
    console.log(user[j]);
}

//for key and values pair

for(let i in user){
    console.log(user);
}

const obj = {
    a : 30,
    b : 50,
    c : true,
    d : "puneet"
}

multiplyByThere(obj);

function multiplyByThere(obj){
    for(let i in obj){
        if(typeof obj[i] === "number"){
            obj[i] =obj[i]*3;
        }
    }
}
console.log(obj);

//JSON STRINNGFY 

const  user2 = {
    name : "abhinav",
    age : 22
}

console.log(user2);
console.log(JSON.stringify(user2));

// JSON PARSE AND 

const user3 ={
    name : "mr sanjeev",
    age :45
}

const strobject = JSON.stringify(user3);
console.log(strobject);
console.log(JSON.parse(strobject));
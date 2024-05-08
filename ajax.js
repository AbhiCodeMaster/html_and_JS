document.getElementById("btn").addEventListener("click",makereq);

let data = document.getElementById("data");

let age = document.getElementById("age");

function makereq(){
    // create xmlhttprequest object
    const xhr = new XMLHttpRequest();

    // requeat initialize
    xhr.open('GET','plain.json',true);
    xhr.responseType = "json";

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                
               // console.log(xhr.response);
                console.log(xhr.response.name);

                console.log(xhr.response.college_name)
                
                data.innerHTML = xhr.response.name;

                age.innerHTML = xhr.response.college_name;
            }else{
                console.log("some problem is there");
            }
        }
    }
    //data = {"name" : "abhi", "salary" : "546323","age":"23"};
    // sending the req
    xhr.send();
}
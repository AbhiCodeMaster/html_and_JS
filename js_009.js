function register(callback){
    setTimeout(() => {
     console.log('register end');
     callback();   
    },1000);
}
function sendEmail(callback){
    setTimeout(()=>{
        console.log('email end');
        callback();
    },1000);
}
function login(callback){
    setTimeout(()=>{
        console.log('login end');
        callback();
    },1000);
}
function getuserData(callback){
    setTimeout(()=>{
        console.log('get user data');
        callback();
    },1000);
}
function DisplayuserData(callback){
    setTimeout(()=>{
        console.log('display user data end');
        callback();
    },1000);
}

// now we call these function to execute the function

register(function(){
    sendEmail(function(){
        login(function(){
            getuserData(function(){
                DisplayuserData();
            })
        })
    })
})
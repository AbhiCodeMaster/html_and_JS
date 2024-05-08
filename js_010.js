function sendEmail(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('email ended');
            resolve();
        },1000);
    })
}

function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log('login ended');
        resolve();
    },1000);
})
}

function getuserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('get user data');
        resolve();
    },1000);
    })
}

function DisplayuserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('display user');
        resolve();
    },1000);
    })
}

function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('register ended');
        resolve();
    },1000);
    })
}

// now here we call these function
register().then(sendEmail).then(login).then(getuserData).then(DisplayuserData);
console.log('other application work');
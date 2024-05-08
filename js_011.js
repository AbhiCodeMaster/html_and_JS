function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
           console.log('register end'); 
           resolve();
        },1000);
    })
}
function sendEmail(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Email ended');
            resolve();
        },1000)
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
function getuserdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('got user data');
            resolve();
        },1000);
    })
}
function DisplayuserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('display user data ended');
            resolve();
        },1000);
    })
} 
//now we calling these function

async function authenticate(){
    
        await register();
        await sendEmail();
        await login();
        await getuserdata();
        await DisplayuserData();

    
}
authenticate().then(()=>{
    console.log('all set');
})/*.catch((err)=>{
    console.log(err);
});
*/
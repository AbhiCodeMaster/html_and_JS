function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('register end');
            resolve();
        },1000);
    })
}
function sendEmail(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('email end');
            resolve();
        },1000);
    }) 
}
function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('login end');
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
    });
}
function DisplayuserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('user data displayed');
            resolve();
        },1000);
    })
}
async function authenticate(){
    try{
        await register();
        await sendEmail();
        await login();
        await getuserData();
        await DisplayuserData();
    }
    catch(err){
        console.log(err);
    }
}
authenticate().then(()=>{
    console.log('all set')
});
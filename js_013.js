function register(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log('register end');
            resolve();
        },1000);
    })
}
function Email(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('email login');
            resolve('success');
        },1000);
    })
}
function login(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log('login ended');
            resolve();
        })
    })
}

// now we here a call a function

async function authenticate(){
    try{
                        await register();
        const message = await Email();
                        await login();
        console.log(message);
    }
    catch(err){
        console.log(err);
        //throw new Error();
    }
}

authenticate().then(()=>{
    console.log('all set');
}).catch((err)=>{
    console.log(err);
})

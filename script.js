console.log("start");
// const sub = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const result = true;
//         if(result)  resolve("Subscribe to Rishabh Jain")
//         else reject(new Error("This is not subscribed"))
//     }, 1000);
// });
// const sub1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const result = true;
//         if(result)  resolve("Subscribe to Rishabh Jain 1")
//         else reject(new Error("This is not subscribed"))
//     }, 1000);
// });
// const sub2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const result = true;
//         if(result)  resolve("Subscribe to Rishabh Jain 2")
//         else reject(new Error("This is not subscribed"))
//     }, 1000);
// });


//Promise is will way to call this function
function importantFunction(useName){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`Subcribe to ${useName}`);
        }, 5000);
    });
}

function importantFunction2(useName){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject(`Error to ${useName}`);
        }, 1000);
    });
}

// one way for doing promise chaining
importantFunction("Rishabh").then((res)=>{
    // console.log(res);
    return importantFunction2("Rishabh 2");
}).then((res2)=>{
    console.log(res2);
});

//using Promise all
//If any one of promised got failed then we will end up in catch block
Promise.all([importantFunction("Rishabh"),importantFunction2("sambhav")]).then(res=>console.log(res)).catch(err=>console.log("Error promise failed"+err)); 

// promise Settle All return failed as well as fullfilled promise
Promise.allSettled([importantFunction("Rishabh"),importantFunction2("sambhav")]).then(res=>console.log(res)).catch(err=>console.log("Error promise failed"+err));

//Will return what he got first it will into catch or either then 
Promise.race([importantFunction("Rishabh"),importantFunction2("sambhav")]).then(res=>console.log(res)).catch(err=>console.log("Error promise failed"+err));

//This will return only success and ignore reject.
Promise.any([importantFunction("Rishabh"),importantFunction2("sambhav")]).then(res=>console.log(res)).catch(err=>console.log("Error promise failed"+err));

//  

const result = async () =>{
    try{
        const msg1 = await importantFunction('Rishabh');
        console.log(msg1);
        const msg2 = await importantFunction2('sambhav');
        console.log(msg2)

    }catch(error){
        console.log(error);
    }
}

result();


console.log("end");


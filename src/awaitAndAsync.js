function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => { resolve('resolved'); }, 2000);
    })
}

async function asyncCall() {
    console.log("begin");
    let result = await resolveAfter2Seconds();
    console.log(result);
}



//asyncCall()
const p1 = new Promise((res, reject) => {
    setTimeout(() => {
        console.log("this is reject begin");
        reject(1);
        console.log("this is reject end");
    }, 100)
});
const p2 = new Promise((res, reject) => {
    setTimeout(() => {
        console.log("this is resolve begin");
        res(2);
        console.log("this is resolve end");
    }, 3000)
});


// even get error response then still call all api  
async function myPromise() {
    await Promise.all([p1, p2]).catch(x=>console.log(x));
    console.log("done!");
}

myPromise();
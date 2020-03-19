

var p5 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("start five");
        reject(new Error('five'));
        console.log("end five");
    }, 5000);
});

var p6 = new Promise(function (resolve, reject) {

    setTimeout(() => {
        console.log("start six");
        resolve(('six'));
        console.log("end six");
    }, 6000);
});

async function callPromise() {
    return await Promise.race([p5, p6])
        .then(function (value) {
            console.log(value);
        }).catch(e => console.log("get errot", e));
}

const my = async () => {
    console.log("start", new Date());
    await callPromise();
    console.log("complete", new Date());
}

my();
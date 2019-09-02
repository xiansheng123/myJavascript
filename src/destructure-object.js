//destructure object value
{
    let { a: A, b } = { a: 123, b: "hello" }
    console.log('A :', A);
    console.log('b :', b);
}
console.log("=====================");

//object also can assign value
{
    let obj = { c: 123, d: "hello" }
    let { c: C, d } = obj
    console.log('C :', C);
    console.log('d :', d);
}
console.log("=====================");
//complex obj destrcture
{
    let obj = {
        arr: [
            "YO",
            {
                a: 1
            }
        ]
    }
    let { arr: [greet, { a }] } = obj;
    console.log('greet :', greet);
    console.log('a :', a);
}

//receive response
{
    let res = {
        status: 200,
        id: 12,
        data: [{ name: "bob" }, { name: "shushu" }]
    };

    let { status, id, data } = res;
    console.log('status :', status);
    console.log('id :', id);
    console.log('data :', data);
}
console.log("=====================");

//destructure method 
{
    let {floor,pow}=Math;
    let a = 1.9
    console.log('floor(a) :', floor(a));

}
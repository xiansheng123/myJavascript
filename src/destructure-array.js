// noremal destructuring assignment
{
    let c = "lu", d = 123
    let [a, b] = [c, d];
    console.log("a: ", a);
    console.log("b: ", b);
}
console.warn("======================");
//default vale
{
    let [a="123",b="vvv"] =[55,"secondDefine"];
    console.info("a :",a);
    console.info("b :",b);
}
console.warn("======================");
//can skip some value
{
    let [a,,c] =[1,2,3,4]
    let [d,,...e] =[1,2,3,4]
    console.log('a :', a);
    console.log('c :', c);
    console.log('d :', d);
    console.log('e :', e);
}

console.warn("======================");
//split array
{
  let [a ,[c,d]] =["a",["c","f"]]
  console.log('a :', a);
  console.log('c :', c);
  console.log('d :', d);
}


//1 combine arrary and shallow clone
{
    let aa = [1, 2, 3, 4, 5]
    let cc = [11, 22, 33, 44, ...aa]
    let dd = [11, 22, 33, 44, ...cc, ...aa]
    console.log('cc :', cc);
    console.log('dd :', dd);
}

//2 mandary pass paramter
{
    function foo(bar) {
        if (bar === undefined) {
            throw new Error("Missing paramter")
        }
        return bar;
    }

    mandatory = () => {
        throw new Error("Missing paramter");
    }

    fooImpove = (bar = mandatory()) => {
        return bar;
    }

    // console.log('foo() :', foo());
    console.log('foo(s) :', foo("s"));
    // console.log('fooImpove() :', fooImpove());
    console.log('fooImpove("f") :', fooImpove("f"));
}

//3 find just return first one 
{
    let v = [1, 2, 3, 4, 5];
    let y = v.find(x => x > 2);
    console.log('y :', y);
}

//4 Math.floor()
{
    let a= Math.floor(4.9)
    console.log('a :', a);
    let b= ~~4.9;
    console.log('b :', b);

    let c=2**3
    console.log('c :', c);

} 

// remove duplicate
{
    let aa =[1,22,44,22,15];
    let bb= new Set(aa);
    console.log('bb :', bb);
}
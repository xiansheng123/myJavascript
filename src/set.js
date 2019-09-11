{
    let my = new Set([1, 2, 2, 3, 4])
    console.log('my :', my);
    console.log('my.size :', my.size);
    my.add("f")
    console.log('my :', my);

    my.forEach(function (x) {
        if (x > 2) {
            my.delete(x)
        }
    })
    
    console.log('my :', my);

    if(my.has('f')){
        my.add([11,12]);
    }
    console.log('my :', my);

}

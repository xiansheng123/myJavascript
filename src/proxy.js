//es5
{
    let user = {
        fullname: function () {
            return `${this.fname} ${this.lname}`
        }
    }
    user.fname = "bob";
    user.lname = "wow";
    console.log('user.fullname :', user.fullname());
}

//es6
{
    let user = new Proxy({}, {
        get: function (obj, prop) {
            if (prop === "fullname") {
                return `${obj.fname} ${obj.lname}`
            }
        }
    });

    user.fname = "bob";
    user.lname = "wow";
    console.log('user.fullname :', user.fullname);
    console.log('user.aa :', user.aa);
}

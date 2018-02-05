//let employee = ["Noyan Alperen","IDIN"];

let employee = {
    fname: "Noyan Alperen",
    lname: "IDIN",
    gender: "Male"
}

let {fname: f, lname: l, gender: g} = employee;
//let [fname, lname, gender="Male"] = employee;


console.log(f);
console.log(l);
console.log(g);
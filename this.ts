var employee = {
    id: 1,
    name: "alperen",
    greet: function() {
        setTimeout(() => { console.log(this.id, this.name);},1000);
    }
}
employee.greet();

/*
if we use arrow function, it has not self-this property, so we can use upper function's this object
But if we use regular function then it has own this property so we can not reach
upper this property.

*/
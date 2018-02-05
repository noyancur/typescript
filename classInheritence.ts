class Person {

    constructor(name) {
        console.log(`${name} welcome constructor!`);         
    }

    getId() {
        return 10;
    }
}

class Employee extends Person {        
    constructor(name) {
        super(name);
        console.log(`${name} welcome 2nd constructor!`);
     
    }

    getId() {
        return super.getId();
    }
}

class Human extends Employee {
    name2: string;
    surname: number;
    
    constructor(name) {
        super(name);
        console.log(`${name} welcome 3rd constructor!!`);
        this.setName(name);
    }
   
    getId() {
        return super.getId();
    }

    setName(name) {
        this.name2 = name;

    }

    getName = () => {
        return this;
    }

}

/*let e = new Employee("Noyan");
console.log(e.getId());*/

let a = new Human("Noyan");
//a.deneme();
console.log(a.getName());



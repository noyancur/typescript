class Person {
    public fname: string;
    public lname: string;
    constructor(fname: string, lname: string) {
        this.fname = fname;
        this.lname = lname;
    }
}

/**
 * Same thing
 */

class Person1 {
    constructor(public fname: string, public lname: string) {
        

    }
}
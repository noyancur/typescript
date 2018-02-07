"use strict";
var iterable = [1, 2, 3];
function createIterator(array) {
    var count = 0;
    return {
        next: function () {
            return count < array.length ?
                { value: array[count++], done: false } :
                { value: undefined, done: true };
        }
    };
}
var myIterator = createIterator(iterable);
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
/*
Iterable {
    [sybol.Iterator]() : Iterator
}

Iterator {
    next() : IResultObject
}

IResultObject {
    value: any
    done: boolean
}

*/ 

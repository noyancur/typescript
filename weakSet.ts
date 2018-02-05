let set = new WeakSet();
let key = {};
set.add(key);
console.log(set.has(key));
key = null;
console.log(set.has(key));

/**
 * Memory saver but if key is null we dont know it still here!
 */
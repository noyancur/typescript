let myMap = new Map([
    ["fname","Noyan"],
    ["lname","IDIN"]
  ]);
  
  for ( let [key,value] of myMap.entries()) {
    console.log(`${key} -> ${value}`);
  }
  
  for (let key of myMap.keys()){
    console.log(key);
    
  }
  
  for (let value of myMap.values()){
    console.log(value);
    
  }
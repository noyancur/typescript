"use strict";
var myMap = new Map([
    ["fname", "Noyan"],
    ["lname", "IDIN"]
]);
for (var _i = 0, _a = myMap.entries(); _i < _a.length; _i++) {
    var _b = _a[_i], key_1 = _b[0], value = _b[1];
    console.log(key_1 + " -> " + value);
}
for (var _c = 0, _d = myMap.keys(); _c < _d.length; _c++) {
    var key_2 = _d[_c];
    console.log(key_2);
}
for (var _e = 0, _f = myMap.values(); _e < _f.length; _e++) {
    var value = _f[_e];
    console.log(value);
}

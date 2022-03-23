// console.log('hello');

let arr = ['apple', 0, '0', null, NaN, undefined, false, {}]
let result = arr.filter(item => item) // megadjuk paraméterként az aktuális elemet, létrehoz egy új tömböt, amibe beleteszi az aktuális elemet, ha truthy érték. A többit nem, ezért nincs a tömbünkben benne a 0, a null, a NaN, az undefined és a false.

console.log(result);
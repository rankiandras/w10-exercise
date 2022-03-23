const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1] // tömb esetén szögletes zárójellel, objektum esetén kapcsossal működik csak a spread operator
arr3.push(6)
console.log('arr1: ', arr1); // arr1 nem változik a pusholás után!
console.log('arr3: ', arr3);

const arr4 = [...arr1, ...arr2] // össze lehet mördzsölni a tömböket
console.log('arr4: ', arr4);

const userProfile = {
    name: 'lali',
    age: 25,
    coutry: 'Hungary'
};

const userProfile2 = {...userProfile, gender: 'male', name: 'sanyi'}; // hozzá tudunk adni új kulcs-érték párt, illetve meg tudjuk változtatni a meglévő kulcs-érték párt azzal, hogy felülírjuk. 
console.log("userProfile: ", userProfile);
console.log('userProfile2: ', userProfile2);;


// destructuring 

const userProfile = {
    name: 'lali',
    age: 25,
    coutry: 'Hungary'
};
/* 
const name = userProfile.name;
const age = userProfile.age;
 */
/* 
const {name, age} = userProfile; // ez valójában a 7-8. sor rövidítése
console.log('name: ', name);
console.log('age: ', age);
 */
/* 
const logNameAndAge = (incomingUser) => {
    console.log(incomingUser.name);
    console.log(incomingUser.age);
}
logNameAndAge(userProfile)
 */

const logNameAndAge = ({name, age}) => { // destructuring-gel megoldva a 16-20. sor
    console.log("name: ", name);
    console.log('age: ', age);
}
// logNameAndAge(userProfile)

//destructuring used in Arrays


const arr1 = [1, 2, 3, 4];
/* const first = arr1[0];
const second = arr1[1];
console.log('first: ', first);
console.log('second: ', second);
 */

const [c, d] = arr1;
console.log('c: ', c);
console.log('d: ', d);

const [x, ...y] = arr1;
console.log('x: ', x);
console.log('y: ', y);

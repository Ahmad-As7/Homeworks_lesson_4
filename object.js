const mYcar = {};
mYcar['make'] = 'Ford';
mYcar['model'] = 'mustang'
mYcar['year'] = '1998';
mYcar['productionCountry'] = 'product USA'
console.log(mYcar);


const object = {a:1, b:2, c:3,};
for (const property in object){
    console.log(`${property} is ${object[property]}`)
}
// object keys and Object.getOwnPropertyNames() method
console.log(Object.keys(object))
console.log(Object.getOwnPropertyNames('foo'))
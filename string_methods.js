// .charAt() 
let string = "hello world"
console.log(`The chracter at index 4 is ${string.charAt(4)}`) 
// includes()
let searchString = `The world is gonna end in 2030 so become a programmer faster`
let word ='end';
console.log((`The word "${word}" ${searchString.includes(word,14) ? 'is' : 'is not '} in the sentence `));
// console.log(`the word ${searchString.includes('gonna') ? 'is' : 'is not '} in the sentence`)
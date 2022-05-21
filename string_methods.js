// .charAt() 
let string = "hello world"
console.log(`The chracter at index 4 is ${string.charAt(4)}`) 
// expected output : The chracter at index 4 is o
// includes()
let searchString = `The world is gonna end in 2030 so become a programmer faster`
let word ='end';
console.log((`The word "${word}" ${searchString.includes(word,14) ? 'is' : 'is not '} in the sentence `));
// expected output : The word "end" is in the sentence
// console.log(`the word ${searchString.includes('gonna') ? 'is' : 'is not '} in the sentence`)

// slice method
let sliceString = "Today is going to be a good day"
console.log(`how is going to be today? ${sliceString.slice(23,27)}`)
// expected output : how is going to be today? good
// split method
let Str = "Nothin is better than peace of mind but not everyone can achieve it"
let first = Str.split(' ')
console.log(first[4])
// expected output:  peace
console.log(Str.split(' ', 4))
// expected output:  [ 'Nothin', 'is', 'better', 'than' ]
console.log(Str.substring(21,27))
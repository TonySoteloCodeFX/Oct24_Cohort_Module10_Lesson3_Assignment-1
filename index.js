console.log('++++++++++++++++++++++++++++++++++++++')
console.log('Task 1: Adding and Removing Elements')

let fruits = ['apple', 'banana', 'orange'];
console.log(`Fruit List: ${fruits}`)
console.log('--------------------------------------')

console.log('Using Pop')
fruits.pop()
console.log(`Fruit List: ${fruits}`)
console.log('--------------------------------------')

console.log('Using Push')
fruits.push('kiwi')
console.log(`Fruit List: ${fruits}`)

console.log('++++++++++++++++++++++++++++++++++++++')
console.log('Task 2: Sorting Arrays')

let numbers1 = [3, 1, 5, 2, 4];
console.log(`Numbers List: ${numbers1}`)
console.log('--------------------------------------')

console.log('Using Sort')
numbers1.sort()
console.log(`Numbers List: ${numbers1}`)

console.log('++++++++++++++++++++++++++++++++++++++')
console.log('Task 3: Applying Array Methods')

let numbers2 = [3, 1, 5, 2, 4];
console.log(`Numbers List: ${numbers2}`)
console.log('--------------------------------------')

console.log('Using Map')
console.log(`Numbers List: ${numbers2.map(num => num * 2)}`)
console.log('--------------------------------------')

console.log('Using Filter')
console.log(`Numbers List: ${numbers2.filter(num => num % 2 == 0)}`)
console.log('--------------------------------------')

console.log('Using Reduce')
console.log(`Numbers List: ${numbers2.reduce((acc, num) => acc + num, 0)}`)

console.log('++++++++++++++++++++++++++++++++++++++')
console.log('2. Exploring String Manipulation in JavaScript\n')
console.log('Task 1: Obtaining String Length')

let message = "Hello, World!";
console.log(message)
console.log(`Message Length: ${message.length}`)
console.log('--------------------------------------')

console.log('Task 2: Converting Cases')
let text = "Hello, World!";
console.log(`Original Text: ${text}`)
console.log(`Uppercase: ${text.toUpperCase()}`)
console.log(`Lowercase: ${text.toLowerCase()}`)
console.log('--------------------------------------')

console.log('Task 3: Extracting Substrings')
let sentence = "The quick brown fox jumps over the lazy dog";
console.log(`Original String: ${sentence}`)
console.log(`Substring: ${sentence.substring(0,15)}`)
console.log('--------------------------------------')

console.log('Task 4: Splitting Strings')
let sentence2 = "The quick brown fox";
console.log(`Original String: ${sentence2}`)
console.log(`Split String: ${sentence2.split(' ')}`)



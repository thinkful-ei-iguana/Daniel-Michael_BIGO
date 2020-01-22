//////////////////////////
/// WHAT IS THE BIG O? ///
//////////////////////////

/* 1 */
// 1. O(1)
// 2. O(n)

/* 2 */ 
// O(n)

/* 3 */ 
// O(n^2)

/* 4 */
// O(n)

/* 5 */
// O(n)

/* 6 */
// O(n^2)

/* 7 */
// gives an array of the fibonacci sequence up to a given length
// O(n)

/* 8 */
// Logarithmic

/* 9 */
// O(1)

/* 10 */
// determines whether a number is prime
// O(n)

/* 11 */
//TOWER

//Derive Algorithm (recursive)
//5 disks after 7 calls
//how many moves to complete with 3, 5, 7 disks?
//what is the runtime?

function tower(n, source, dest, temp) {
  if(n === 1){
    return print(source, dest);
  }
  tower(n-1, source, temp, dest);
  // move disk
  print(source, dest);
  tower(n-1, temp, dest, source);
}
let counter = 0;
function print(a,b){
  counter++;
  console.log(`Move ${counter}: moving disk from ${a} to ${b}`);
}
tower(5, 'a', 'c', 'b');

/* 12 */
function counting(num) {
  for (let x = num; x >= 0; x--) {
    if (x === 0) console.log('All sheep jumped over the fence');
    else console.log(`${x}: Another sheep jumps over the fence`);
  }
}
counting(4);
// O(n)

function power(base, exp) {
  let num = 1;
  for (let x = 1; x <= exp; x++) {
    num *= base;
  }
  return num;
}
console.log(power(2,3));

function reverse(str) {
  let newStr = '';
  for(let x = str.length; x > 0; x--) {
    newStr += str[x-1];
  }
  return newStr;
}
console.log(reverse('this'));
// O(n)

function tria(num) {
  let sum = 0;
  for (let x = 1; x <= num; x++) {
    sum += x;
  }
  return sum;
}
console.log(tria(3));
// O(n)

function split(str, splitter) {
  const arr = [];
  while (str.includes(splitter)) {
    const i = str.indexOf(splitter);
    arr.push(str.slice(0, i));
    str = str.slice(i + 1);
  }
  return arr;
}
console.log(split('qwer7qwedf7qwe7', '7'));
// O(n)


function fib(num) {
  let arr = [];
  for (let x = 0; x < num; x++) {
    if (x === 0 || x === 1) arr.push(1);
    else arr.push(arr[x-2] + arr[x-1]);
  }
  return arr;
}
console.log(fib(7));
// O(n)


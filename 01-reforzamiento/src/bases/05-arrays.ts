const myArray: number[] = [1, 2, 3, 4];
// const myArray: (number|string)[] = [1, 2, 3, 4];

const myArray2 = [...myArray];

myArray2.push(7);

console.log({array: myArray, array2: myArray2})
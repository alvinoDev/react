function greet(name: string): string {
  return `Hola ${name}`;
}

const greetDos = (name: string) =>  `Hola ${name}`;

const message = greet('Goku');
const messageDos = greetDos('Vegeta');

console.log(message, messageDos);

interface User {
  uid: string;
  username: string;
}


function getUser(): User {
  return {
    uid: 'ABC-123',
    username: 'El_Gato',
  }
}

const getUserDos = (): User => ({
    uid: 'DEF-123',
    username: 'El_Perro',
  })

const user = getUser()
const user2 = getUserDos()
console.log({user, user2});


const myNumbers: number[] = [2, 3, 4, 5, 6];

// myNumbers.forEach(function (value) {
//   console.log({ value });
// });

myNumbers.forEach( (value) => {
  console.log({ value });
});


myNumbers.forEach( (value, index, arr) => {
  console.log(value, index, arr);
});

// Forma corta de hacer lo anterior
// myNumbers.forEach( console.log );
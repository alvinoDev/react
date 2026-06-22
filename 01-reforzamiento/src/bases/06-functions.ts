function greet(name: string): string {
  return `Hola ${name}`;
}

const greetDos = (name: string) => {
  return `Hola ${name}`;
}

const message = greet('Goku');
const messageDos = greetDos('Vegeta');

console.log(message, messageDos);

function getUser() {
  return {
    uid: 'ABC-123',
    username: 'El_Gato',
  }
}

const getUserDos = () => {
  return {
    uid: 'DEF-123',
    username: 'El_Perro',
  }
}

const user = getUser()
const user2 = getUserDos()
console.log({user, user2});

interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address?: Address;
  // address?: {
  //   city: string;
  //   postalCode: string;
  // };
}

interface Address {
  city: string;
  postalCode: string;
}

const ironman: Person = {
  firstName: 'Tony',
  lastName: 'Stark',
  age: 50,
  address: {
    city: 'Malibú, California',
    postalCode: '1234'
  },
};

// const spiderman = { ...ironman };
const spiderman: Person = {
  firstName: 'Peter',
  lastName: 'Parker',
  age: 22,
}

console.log(ironman, spiderman);

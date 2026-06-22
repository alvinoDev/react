const ironman = {
  firstName: 'Tony',
  lastName: 'Stark',
  age: 50,
  address: {
    city: "Malibú, California",
    postalCode: "1234"
  }
};

// const spiderman = { ...ironman };
const spiderman = structuredClone(ironman)

spiderman.firstName = "Peter"
spiderman.lastName = "Parker"
spiderman.age = 24;
spiderman.address.city = "Nueva York"

console.log(ironman, spiderman)
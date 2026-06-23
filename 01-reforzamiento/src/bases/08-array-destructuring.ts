const pokemonNames = ['Pikachu', 'Charmander', 'Squirtle', 'Bulbasaur'];

// const [p1, p2, p3] = pokemonNames;
const [,, squirtle] = pokemonNames;

console.log({ squirtle });

const returnArrayFn = () => {
  // return ['ACB', 213];
  return ['ACB', 213] as const;
};

const [letters, numbers] = returnArrayFn();
//console.log(letters + 100);
// 
console.log({letters, numbers});

const person = {
  name: "Tony",
  age: 45,
  key: "Ironman",
};

// const name = person.name;
// const age = person.age;
// const key = person.key;

// el orden en la desestructuracion no importa
const { name:ironmanName, age, key } = person;

console.log({ ironmanName, age, key });

interface Hero {
  name: string;
  age: number;
  key: string;
  rank?: string;
}

// const useContext = ({key, name, age, rank}: Hero) => {
//   return {
//     keyName: key,
//     user: {
//       name: name,
//       age: age,
//     },
//     rank: rank,
//   }
// }

const useContext = ({ key, name, age, rank = "Sin Rango" }: Hero) => {
  return {
    keyName: key,
    user: {
      name,
      age,
    },
    rank,
  };
};

// const context = useContext(person);
// console.log(context);

const {
  rank,
  keyName,
  user,
  // user: { name },
} = useContext(person);

const { name } = user;

console.log({ rank, keyName, name });

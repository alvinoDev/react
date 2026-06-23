export interface Hero {
  id: number;
  name: string;
  owner: Owner;
}

// Creamos los types para cuando tenemos valores especificos
// type Owner = 'DC' | 'Marvel';

// enum Owner {
//   DC,// 0
//   Marvel,// 1
// }

export enum Owner {
  DC = "DC", // 'DC;
  Marvel = "Marvel", // 'Marvel'
};

export const heroes: Hero[] = [
  {
    id: 1,
    name: "Batman",
    owner: Owner.DC,
  },
  {
    id: 2,
    name: "Spiderman",
    owner: Owner.Marvel,
  },
  {
    id: 3,
    name: "Superman",
    owner: Owner.DC,
  },
  {
    id: 4,
    name: "Flash",
    owner: Owner.DC,
  },
  {
    id: 5,
    name: "Wolverine",
    owner: Owner.Marvel,
  },
];

// export default heroes;
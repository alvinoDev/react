import { heroes, type Hero, Owner } from "../data/heroes.data"

const getHeroById = (id: number): Hero | undefined => {
  const hero = heroes.find((hero) => {
    return hero.id === id;
  });

  // if (!hero) {
  //   throw new Error(`No exisite un Heroe con el id ${id}`);
  // }

  return hero;
}

// console.log(getHeroById(13));

export const getHeroesByOwner = (owner: Owner) => {
  const heroesByOwner = heroes.filter((hero) => {
    return hero.owner === owner;
  });
  return heroesByOwner;
}

// Version simplificado de lo anterior
// export const getHeroesByOwner = (owner: Owner) => heroes.filter((hero) => hero.owner === owner);

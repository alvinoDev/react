const firstName = "Arturo";
const lastName = "de Bretaña";

const favoriteGames = ["Elden Ring", "Smash", "Pokemon"];

const isActive = true;

const address = {
  zipCode: "321-ASD",
  country: "Bretaña",
};

// Forma Tradicional
// export function MyAwesomeApp() {
//   return (
//     <>
//       <h1>Arturo</h1>
//       <h3>de Bretaña</h3>
//     </>
//   )
// }

// Forma Moderna
export const MyAwesomeApp = () => {
  return (
    <>
      <h1>{firstName}</h1>
      <h3>{lastName}</h3>

      <p>{favoriteGames.join(", ")}</p>
      <p>{2 + 7}</p>

      <h2>{isActive ? "Activo" : "No Activo"}</h2>

      <p>{JSON.stringify(address)}</p>
    </>
  );
};

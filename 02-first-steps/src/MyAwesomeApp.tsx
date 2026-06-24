import type { CSSProperties } from "react";

const firstName = "Arturo";
const lastName = "de Bretaña";

const favoriteGames = ["Elden Ring", "Smash", "Pokemon"];

const isActive = false;

const address = {
  zipCode: "321-ASD",
  country: "Bretaña",
};

const myStyles: CSSProperties = {
  backgroundColor: isActive ? "#FAFAFA" : "#FFFCCC",
  borderRadius: 10,
  padding: 8,
};

// Forma Moderna
export const MyAwesomeApp = () => {
  return (
    <>
      <h1>{firstName}</h1>
      <h3>{lastName}</h3>

      <p>{favoriteGames.join(", ")}</p>
      <p>{2 + 7}</p>

      <h2>{isActive ? "Activo" : "No Activo"}</h2>

      <p style={myStyles}>{JSON.stringify(address)}</p>
    </>
  );
};

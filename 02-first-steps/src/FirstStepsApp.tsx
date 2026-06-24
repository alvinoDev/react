import { ItemCounter } from "./shopping-cart/ItemCounter";

export function FirstStepsApp() {
  return (
    <>
      <h1>CARRITO DE COMPRAS 🛒</h1>
      
      <ItemCounter name="Nintendo Switch 2" quantity={10}/>
      <ItemCounter name="Playstation 5" quantity={11}/>
      <ItemCounter name="Super Mario" quantity={14} />
    </>
  );
}
import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { productName: "Nintendo Switch 2", quantity: 4 },
  { productName: "Playstation 5", quantity: 2 },
  { productName: "Super Mario", quantity: 1 },
];

export function FirstStepsApp() {
  return (
    <>
      <h1>CARRITO DE COMPRAS 🛒</h1>

      {itemsInCart.map(({productName, quantity}) => (
        <ItemCounter key={productName} name={productName} quantity={quantity} />
      ))}
      
      {/*<ItemCounter name="Nintendo Switch 2" quantity={10} />
      <ItemCounter name="Playstation 5" quantity={11} />
      <ItemCounter name="Super Mario" quantity={14} />*/}
    </>
  );
}

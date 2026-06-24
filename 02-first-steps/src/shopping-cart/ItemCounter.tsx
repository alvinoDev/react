interface Props {
  name: string;
  quantity?: number;
}

export const ItemCounter = ({ name, quantity }: Props) => {
  const handleClick = () => {
    console.log(`Click ${name}`);
  };

  return (
    <>
      <section
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 8,
        }}
      >
        <span style={{ width: 150 }}>{name}</span>
        <button onClick={handleClick}> +1 </button>
        <span>{quantity}</span>
        <button> -1 </button>
      </section>
    </>
  );
};

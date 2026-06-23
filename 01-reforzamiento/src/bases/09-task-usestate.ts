const useState = (value: string) => {
  return [
    value,
    (text: string) => {
      console.log(text);
    },
  ] as const ;
};

const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta');       // Imprime "Vegeta"
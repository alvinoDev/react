const myPromise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    //! yo quiero mi dinero!!
    // resolve(100);
    reject("Mi amigo se perdió");
  }, 2000);
});

myPromise
  .then((myMoneyIsBack) => {
    console.log(`Tengo mi dinero ${myMoneyIsBack}`);
  })
  .catch((reason) => {
    console.warn(reason);
  })
  .finally(() => {
    console.log(`Pues a seguir con la VIDA!`);
  });

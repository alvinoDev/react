const API_KEY = "9QWZ8UwklsZixcj7EoR9ZFLxt8oMaHMN";

const myRequest = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`,
);

myRequest
  .then((response) => response.json())
  .then((data) => {
    const imgUrl = data.data.images.original.url;
    console.log(imgUrl)

    const imgElement = document.createElement('img');
    imgElement.src = imgUrl;
    document.body.append(imgElement);
    
  })
  .catch((err) => {
    console.log(err);
  });

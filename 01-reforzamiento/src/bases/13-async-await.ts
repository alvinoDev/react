import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = "9QWZ8UwklsZixcj7EoR9ZFLxt8oMaHMN";

const createImageInsideDOM = (url: string) => {
  const imgElement = document.createElement('img');
  imgElement.src = url;
  document.body.append(imgElement);
}

const getRandomGifUrl = async (): Promise<string> => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`,
  );

  // const data = await response.json();
  const {data}: GiphyRandomResponse = await response.json();
  // const data = (await response.json()) as GiphyRandomResponse;
  return data.images.original.url;
}

// getRandomGifUrl().then((url) => createImageInsideDOM(url));
getRandomGifUrl().then(createImageInsideDOM);


export const getGifs = async (category) => {
  const limit = 4;
  const apiKey = 'eU0RKJE15pCeTK4baaf03vzbKUMso0x3';
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=${apiKey}`;
  const res = await fetch(url);
  const {data} = await res.json();
  const gifs = data.map(({id, title, images}) => {
    const {downsized_medium: url} = images;
    return {id, title, url: url.url};
  });
  return gifs;
}

import { useState, useEffect } from "react"
import { getGifs } from '../helpers/getGifs';

export const useGetGifs = (category) => {

  const [state, setState] = useState ({
    images: [],
    loading: true
  });

  useEffect(() => {
    getGifs(category).then(images => {
      setTimeout(() => {
        setState({
          images,
          loading: false
        });
      }, 4000);
    });
  }, [category]);

  return state;
}

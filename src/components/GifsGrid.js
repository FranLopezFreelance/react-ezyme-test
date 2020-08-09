import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { GifGridItem } from './GifGridItem';

export const GifsGrid = ({category}) => {

  const [images, setImages] = useState([]);
  useEffect(() => {
    getGifs();
  }, []);

  const apiKey = 'eU0RKJE15pCeTK4baaf03vzbKUMso0x3';
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=12&api_key=${apiKey}`;
  const getGifs = async () => {
    const res = await fetch(url);
    const {data} = await res.json();
    let gifs = [];
    if(data){
      gifs = data.map(({id, title, images}) => {
        const {downsized_medium: url} = images;
        return {id, title, url: url.url};
      });
    }
    
    setImages(gifs);
  }

  return (
    <Fragment>
      <h3>{category}</h3>
        {
          images.map(image => {
            return <GifGridItem 
                      key={image.id} 
                      {...image} />
          })
        }
    </Fragment>
  )
}

GifsGrid.propTypes = {
  category: PropTypes.string.isRequired
}

export default GifsGrid;

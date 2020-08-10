import React from 'react';
import PropTypes from 'prop-types';
import { useGetGifs } from '../hooks/useGetGifs';
import { GifGridItem } from './GifGridItem';

export const GifsGrid = ({category}) => {

  const {images, loading} = useGetGifs(category);

  return (
    <div className="gif-item">
      <h4 className="animate__animated animate__backInDown">{category}</h4>
      {(loading && <p className="animate__animated animate__flash loading">Buscando...</p>)}
        {
          (!images.length && !loading) ?
          <p className="animate__animated animate__heartBeat no-results">No se encontraron resultados</p> : 
          images.map(image => {
            return <GifGridItem
                      key={image.id} 
                      {...image} />
          }) 
        }
    </div>
  )
}

GifsGrid.propTypes = {
  category: PropTypes.string.isRequired
}

export default GifsGrid;

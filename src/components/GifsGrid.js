import React, {  Fragment } from 'react';
import PropTypes from 'prop-types';
import { useGetGifs } from '../hooks/useGetGifs';
import { GifGridItem } from './GifGridItem';


export const GifsGrid = ({category}) => {

  /* const [images, setImages] = useState([]);
  useEffect(() => {
    getGifs(category).then(setImages);
  }, [category]); */
  const {images, loading} = useGetGifs(category);

  return (
    <Fragment>
      <h4>{category}</h4>
      {(loading && <p className="loading">Buscando...</p>)}
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

import React from 'react'
import PropTypes from 'prop-types';

export const GifGridItem = ({url, title}) => {
  return (
      <a href={url} target="blank" 
        className="animate__animated animate__backInUp gif"
        title={title}>
        <p>{title}</p>
        <img className="gif-img" src={url} alt={title} />
      </a>
  )
}

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default GifGridItem;

import React from 'react'
import PropTypes from 'prop-types';

export const GifGridItem = ({url, title}) => {
  return (
    <div className="gif">
      <p>{title}</p>
      <img className="gif-img" src={url} alt={title} />
    </div>
  )
}

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default GifGridItem;

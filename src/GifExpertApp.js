import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types';
import AddCategory from './components/AddCategory';
import { GifsGrid } from './components/GifsGrid';

const GifExpertApp = ({name}) => {

  const [categories, setCategory] = useState(['One Punch']);

  return (
    <Fragment>
      <h2 className="animate__animated animate__fadeIn">{name}</h2>
      <AddCategory setCategory={setCategory} />
      <hr />
      <ul>
        { categories.map(category => 
            <GifsGrid 
              key={category} 
              category={category} />
          ) }
      </ul>
    </Fragment>
  )
}

GifExpertApp.propTypes = {
  name: PropTypes.string.isRequired
}

export default GifExpertApp;

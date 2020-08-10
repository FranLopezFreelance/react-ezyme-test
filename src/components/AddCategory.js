import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategory}) => {
  
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleAddCategory = () => {
    if(inputValue.trim().length > 1){
      setCategory(cats => [inputValue, ...cats ]);
      setInputValue('');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim().length > 1){
      setCategory(cats => [inputValue, ...cats ]);
      setInputValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        placeholder="Buscar... "
        type="text" 
        className="category-input" 
        value={inputValue} 
        onChange={handleInputChange} />
      <button 
        className="add-category"
        onClick={handleAddCategory}>Buscar</button>
    </form>
  )
}

AddCategory.propTypes = {
  setCategory: PropTypes.func.isRequired
}

export default AddCategory

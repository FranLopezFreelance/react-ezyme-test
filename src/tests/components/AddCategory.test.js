import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import  AddCategory from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

  const setCategory = jest.fn();
  let wrapper;
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategory={setCategory} />);
  });

  test('debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de cambiar el input', () => {
    const input = wrapper.find('input');
    const value = 'Hola mundo';
    input.simulate('change', {target:{ value }});
  });

  test('No debe postear la información onSubmit', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} });  
    expect(setCategory).not.toHaveBeenCalled();
  });

  test('Debe llamar el setCategory y limpiar caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola mundo';
    input.simulate('change', {target:{ value }});
    wrapper.find('form').simulate('submit', { preventDefault(){} });  
    /* expect(setCategory).toHaveBeenCalled(); */
    expect(setCategory).toHaveBeenCalledTimes(1);
    expect(setCategory).toHaveBeenCalledWith( expect.any(Function) );
    expect(input.prop('value')).toBe('');
  });
});
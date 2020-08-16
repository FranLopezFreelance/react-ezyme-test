import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas en el <GifExpertApp />', () => {
  const name = 'Gif Expert App';

  test('Debe renderizarse el componente', () => {
    const wrapper = shallow(<GifExpertApp name={name} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar una lista de categorías', () => {
    const categories = ['One Punch', 'Los SImpsons'];
    const wrapper = shallow(<GifExpertApp name={name} defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifsGrid').length).toBe(categories.length);
  });
});
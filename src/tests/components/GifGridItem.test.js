import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

  const title = 'Título';
  const url = 'https://url.com';
  const wrapper = shallow(<GifGridItem url={url} title={title} />);

  test('debe mostrar el componente correctamente', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('p debe tener el título', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });

  test('img debe tener url en src', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
  });

  test('a debe tener className animate__animated', () => {
    const a = wrapper.find('a');
    const className = a.prop('className');
    expect(className.includes('animate__animated')).toBe(true);
  });
});

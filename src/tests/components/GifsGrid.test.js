import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifsGrid } from '../../components/GifsGrid';
import { useGetGifs } from '../../hooks/useGetGifs';

jest.mock('../../hooks/useGetGifs');

describe('Pruebas en el <GifsGrid />', () => {

  const category = 'Simpsons';

  test('Debe de mostrarse correctamente', () => {
    useGetGifs.mockReturnValue({
      images: [],
      loading: true
    });
    const wrapper = shallow(<GifsGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de mostrar items cuando se cargan imágenes con useGetGifs', () => {
    const images = [
      {
        id: 'ABC',
        url: 'http://url.com/imgs/1.jpg',
        title: 'Cualquier cosa'
      },
      {
        id: 'BCD',
        url: 'http://url.com/imgs/1.jpg',
        title: 'Cualquier cosa'
      }
    ]
    
    useGetGifs.mockReturnValue({
      images,
      loading: false
    });
    const wrapper = shallow(<GifsGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(images.length);
  });
  
});

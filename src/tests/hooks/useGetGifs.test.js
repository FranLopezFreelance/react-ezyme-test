import { useGetGifs } from '../../hooks/useGetGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useGetGifs', () => {
  
  test('Dabe retornar el estado actual', async () => {
    //const {images, loading} = useGetGifs('Los Simpson'); 
    const { result, waitForNextUpdate } = renderHook(() => useGetGifs('Los SImpson'));
    const {images, loading} = result.current;
    await waitForNextUpdate();
    expect(images).toEqual([]);
    expect(loading).toBe(true);
  });

  test('Debe de retornar un array de imagenes y loading false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGetGifs('Los SImpson'));
    await waitForNextUpdate();
    const {images, loading} = result.current;
    expect(images.length).toBe(4);
    expect(loading).toBe(false);
  });
});
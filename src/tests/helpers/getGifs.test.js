import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs Fetch', () => {

  test('debe traer 4 elementos', async () => {
    const gifs = await getGifs('One Punch');
    expect(gifs.length).toBe(4);
  });

  test('debe traer 4 elementos', async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });
});
import { requestData } from './Requests';

describe('Requisição de user', () => {
  it('deve ser possivel realizar uma requisição para user', async () => {
    const response = await requestData('thelastofuslinco');

    expect(response).toHaveProperty('avatar_url');
  });

  it('não deve ser possivel fazer uma requisição para user', () => {
    expect(async () => {
      await requestData('fhskjhfjdshjsd');
    }).rejects.toBeInstanceOf(Error);
  });
});

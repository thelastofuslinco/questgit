import { requestData } from './Requests';

describe('Requisição de user', () => {
  it('deve ser possivel realizar uma requisição', async () => {
    const response = await requestData('thelastofuslinco');

    expect(response).toHaveProperty('avatar_url');
  });

  it('não deve ser possivel fazer uma requisição de um usuario não existente', () => {
    expect(async () => {
      await requestData('fhskjhfjdshjsd');
    }).rejects.toBeInstanceOf(Error);
  });
});

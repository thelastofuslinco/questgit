import { requestData } from './Requests';

describe('Requisição de user', () => {
  it('deve ser possivel realizar uma requisição para repos', async () => {
    const response = await requestData('thelastofuslinco/repos');

    expect(response[0]).toHaveProperty('name');
  });

  it('não deve ser possivel fazer uma requisição para repos', () => {
    expect(async () => {
      await requestData('fhskjhfjdshjsd/repos');
    }).rejects.toBeInstanceOf(Error);
  });
});

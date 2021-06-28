import { requestData } from './Requests';

describe('Requisição de user', () => {
  it('deve ser possivel realizar uma requisição para starred', async () => {
    const response = await requestData('thelastofuslinco/starred');

    expect(response[0]).toHaveProperty('name');
  });

  it('não deve ser possivel fazer uma requisição para starred', () => {
    expect(async () => {
      await requestData('fhskjhfjdshjsd/starred');
    }).rejects.toBeInstanceOf(Error);
  });
});

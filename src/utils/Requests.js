import axios from 'axios';
import { client_id, client_secret } from './clientKey';

const url = 'https://api.github.com/users/';

export const requestData = async (request) => {
  try {
    const response = await axios.get(
      url + request + `?client_id=${client_id}&client_secret=${client_secret}`
    );

    return response.data;
  } catch (err) {
    console.log('Erro:', err);

    return null;
  }
};

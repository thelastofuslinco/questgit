import axios from 'axios';

const url = 'https://api.github.com/users/';

export const requestData = async (request) => {
  try {
    const response = await axios.get(url + request);

    return response.data;
  } catch (err) {
    console.log('Erro:', err);
  }
};

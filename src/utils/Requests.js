import axios from 'axios';

const url = 'https://api.github.com/users/';
const client_id = '73dfdd4e1781f4a851a9';
const client_secret = '0674ab30d11d8235674e4e9ec926b2cb3267d4cd';

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

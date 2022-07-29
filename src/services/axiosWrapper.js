import axios from 'axios';
// process.env.baseUrl
const baseUrl = 'http://localhost:4002';

/**
 * Orchestrate all the axios calls here with response or errors for UI
 * @param {String} url path
 * @returns
 */
// fetch request for GET
export const get = async (url) => {
  const options = {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Accept: 'application/json',
    },
  };
  const resourceUrl = `${baseUrl}${url}`;
  const result = await axios.get(resourceUrl, options);
  return result;
};

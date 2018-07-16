import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';

async function makeRequest(endpoint, method = 'GET', params = null, headers = {}) {
  const request = axios({
    method,
    url: endpoint,
    data: params,
    headers
  });
  return await request;
}

const httpClient = {
  makeRequest
};

export default httpClient;

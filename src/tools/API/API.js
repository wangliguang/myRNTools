import { isNetConnected } from './NetManager';

const GGUtil = (server) => (method) => (API) => (query,defaults) =>  {
  const url = server + API;
  const data = (defaults) ? Object.assign({}, defaults,query) : query;
  const content = requestInit(method, data);
  const request = fetch(url,content).then(response => response.json())
    .then(checkNetworkConnectivity)
  return request;
}

const APIServer = GGUtil("http://xxxx/");

const API_POST = APIServer('POST');

export const API = {
  fetchInfo: API_POST('xxxx'),
};

function checkNetworkConnectivity(params) {
  if (!isNetConnected()) {
    const errorNoNet = '不好意思，网络错误';
    return Promise.reject(new Error(errorNoNet));
  }
  return params;
}


const requestInit = (method: HTTPMethod, params: Object) => ({
  method,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: encodeURLBody(params),
});

const encodeURLBody = (params: Object) => {
  const encodedParams = Object.keys(params).map(key => (
    `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
  )).join('&');
  return
}
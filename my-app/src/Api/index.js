import axios from "axios";

const api = axios.create();

api.defaults.baseURL = "http://localhost:3030";

//All request will wait 2 seconds before timeout
api.defaults.timeout = 10000;

export async function getRequest(URL, params = undefined) {
  let response;
  if (params === undefined) {
    response = await api.get(`/${URL}`);
  } else {
    response = await api.get(`/${URL}`, { params });
  }

  return response;
}

export function postRequest(URL, payload) {
  return api.post(`/${URL}`, { payload }).then((response) => response);
}

export function patchRequest(URL, payload) {
  return api.patch(`/${URL}`, { payload }).then((response) => response);
}

export function deleteRequest(URL) {
  return api.delete(`/${URL}`).then((response) => response);
}

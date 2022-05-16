import axios from "axios";

const api = axios.create();

api.defaults.baseURL = "http://45.79.245.94:5000/";

//All request will wait 10 seconds before timeout
api.defaults.timeout = 10000;

api.defaults.headers.common["x-access-token"] = localStorage.getItem("token");

export async function getRequest(URL) {
  return api
    .get(`/${URL}`)
    .then((response) => response)
    .catch((error) => error.response);
}

export function postRequest(URL, payload) {
  return api
    .post(`/${URL}`, payload)
    .then((response) => response)
    .catch((error) => error.response);
}

export function patchRequest(URL, payload) {
  return api
    .patch(`/${URL}`, payload)
    .then((response) => response)
    .catch((error) => error.response);
}
export function putRequest(URL, payload) {
  return api
    .put(`/${URL}`, payload)
    .then((response) => response)
    .catch((error) => error.response);
}

export function deleteRequest(URL) {
  return api
    .delete(`/${URL}`)
    .then((response) => response)
    .catch((error) => error.response);
}

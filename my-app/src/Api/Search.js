import { getRequest } from "./index";

export async function getSearchAllUsers(setLoading, setRes, params) {
  //params is a string like => ?id=20
  setLoading(true);

  try {
    const response = await getRequest(`users/search${params}`);
    setRes(response);
  } catch (error) {
    console.log(error.message);
  }
  setLoading(false);
}

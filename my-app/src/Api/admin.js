import { getRequest } from "./index";

export async function getAllUsers(setLoading, setRes, params) {
    //params is a string like => ?id=20
    setLoading(true);

    try {
      const response = await getRequest(`users/all${params}`);
      setRes(response);
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  }
import { postRequest, getRequest, putRequest } from "./index";

export async function GSignupWithGoogle(setLoading, setId) {
  //params is a string like => ?id=20
  setLoading(true);
  let params;
  // console.log(`products${params}`);

  try {
    // const response = await getRequest(`signup/google${params}`);
    const response = await getRequest(`signup/google${params}`);
    setId(response);
  } catch (error) {
    // console.log(error.message);
  }
  setLoading(false);
}

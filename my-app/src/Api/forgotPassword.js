import { postRequest, getRequest, putRequest } from "./index";

export async function postVerify(setLoading, setRes, requestBody) {
  setLoading(true);
  let response;

  try {
    response = await postRequest("users/forgot_password/OTP", requestBody);

    setRes(response);
  } catch (error) {
    // console.log(error);
    setRes(error);
  }
  // console.log(response);
  setLoading(false);
}

// Send email + verification code to back end
export async function PostEmailAndVerCode(setLoading, setId, params) {
  //params is a string like => ?id=20
  setLoading(true);
  // console.log(`products${params}`);

  try {
    const response = await getRequest(`users/forgot_password/OTP${params}`);
    setId(response);
  } catch (error) {
    // console.log(error.message);
  }
  setLoading(false);
}

//post new password
export async function PostNewPassword(setLoading, setRes, requestBody) {
  setLoading(true);
  let response;

  try {
    response = await putRequest("users/forgot_password", requestBody);

    setRes(response);
  } catch (error) {
    // console.log(error);
    setRes(error);
  }
  // console.log(response);
  setLoading(false);
}

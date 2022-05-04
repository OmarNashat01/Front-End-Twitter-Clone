import { postRequest, getRequest } from "./index";

export async function postVerify(setLoading, setRes, requestBody) {
  /*
    requestBody is an object like:
  
      {
          key: "value",
          id: 123
      }
  
      SEARCH ON HOW TO WRITE OBJECTS IN JAVASCRIPT FOR MORE CLARIFICATION
  
    */
  setLoading(true);
  let response;

  try {
    response = await postRequest("signup/verify", requestBody);

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
    const response = await getRequest(`signup/confirm_email${params}`);
    setId(response);
  } catch (error) {
    // console.log(error.message);
  }
  setLoading(false);
}

export async function postUserData(setLoading, setCoins, requestBody) {
  /*
  requestBody is an object like:

    {
        key: "value",
        id: 123
    }

    SEARCH ON HOW TO WRITE OBJECTS IN JAVASCRIPT FOR MORE CLARIFICATION

  */
  setLoading(true);
  let response;

  try {
    response = await postRequest("signup", requestBody);

    setCoins(response);
  } catch (error) {
    // console.log(error);
    setCoins(error);
  }
  setLoading(false);
}

export async function postEmailAndPassword(setLoading, setCoins, requestBody) {
  /*
    requestBody is an object like:
  
      {
          key: "value",
          id: 123
      }
  
      SEARCH ON HOW TO WRITE OBJECTS IN JAVASCRIPT FOR MORE CLARIFICATION
  
    */
  setLoading(true);
  let response;

  try {
    response = await postRequest("Login", requestBody);

    setCoins(response);
  } catch (error) {
    // console.log(error);
    setCoins(error);
  }
  setLoading(false);
}

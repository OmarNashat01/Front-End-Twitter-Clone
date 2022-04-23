import { getRequest, postRequest } from "./index";

// GET request without parameters example
export async function getCoins(setLoading, setCoins) {
  setLoading(true);

  try {
    const response = await getRequest("coins");
    setCoins(response);
  } catch (error) {
    console.log(error.message);
  }
  setLoading(false);
}

//GET request with parameters example
export async function getId(setLoading, setId, params) {
  //params is a string like => ?id=20
  setLoading(true);
  console.log(`products${params}`);

  try {
    const response = await getRequest(`products${params}`);
    setId(response);
  } catch (error) {
    console.log(error.message);
  }
  setLoading(false);
}

//POST request example
export async function postCoins(setLoading, setCoins, requestBody) {
  /*
  requestBody is an object like:

    {
        key: "value",
        id: 123
    }

    SEARCH ON HOW TO WRITE OBJECTS IN JAVASCRIPT FOR MORE CLARIFICATION

  */
  setLoading(true);

  try {
    const response = await postRequest("coins", requestBody);

    setCoins(response);
  } catch (error) {
    console.log(error);
    setCoins(error);
  }
  setLoading(false);
}

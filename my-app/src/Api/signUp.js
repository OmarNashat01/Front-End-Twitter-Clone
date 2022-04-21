import { getRequest, postRequest } from "./index";

//example for get request
export async function getExample(setLoading, setResponse) {
  setLoading(true);

  try {
    const response = await getRequest("example/route");
    setResponse(response);
  } catch (error) {
    console.log(error.message);
  }
  setLoading(false);
}

//example for post request

export async function postExample(setLoading, setResponse) {
  setLoading(true);

  try {
    const response = await postRequest("example/route", { object1: "example" });
    setResponse(response);
  } catch (error) {
    console.log(error.message);
  }
  setLoading(false);
}
//////////////////////////////////////

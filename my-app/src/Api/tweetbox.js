import { postRequest, getRequest } from "./index";

export async function postUserTweet(setLoading, setTweet, requestBody) {
  setLoading(true);
  let response;

  try {
    response = await postRequest("tweets", requestBody);

    setTweet(response);
  } catch (error) {
    console.log(error);
    setTweet(error);
  }
  setLoading(false);
}

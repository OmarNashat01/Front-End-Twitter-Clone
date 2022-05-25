import { postRequest, getRequest, deleteRequest } from "./index";

export async function getTweet(setLoading, setFulltweet, params) {
  //params is a string like => ?id=20
  // console.log(params);
  setLoading(true);

  try {
    const response = await getRequest(`tweets/tweet_id${params}`);
    setFulltweet(response);
  } catch (error) {
    console.log(error.message);
  }
  setLoading(false);
}

//TWEET REQUESTS
export async function postLike(setLoading, setLiked, requestBody) {
  setLoading(true);

  try {
    const response = await postRequest("users/likes", requestBody);

    setLiked(response);
  } catch (error) {
    console.log(error);
    setLiked(error);
  }
  setLoading(false);
}

export async function deleteLike(setLoading, setResponse, params) {
  setLoading(true);

  try {
    const response = await deleteRequest(`users/likes${params}`);
    setResponse(response);
  } catch (error) {
    console.log(error.message);
  }
  setLoading(false);
}

//RETWEET REQUESTS

export async function postRetweet(setLoading, setRetweet, formdata) {
  setLoading(true);

  try {
    const response = await postRequest("users/retweets", formdata);

    setRetweet(response);
  } catch (error) {
    console.log(error);
    setRetweet(error);
  }
  setLoading(false);
}

export async function deleteRetweet(setLoading, setResponse, params) {
  setLoading(true);

  try {
    const response = await deleteRequest(`users/retweets${params}`);
    setResponse(response);
  } catch (error) {
    console.log(error.message);
  }
  setLoading(false);
}

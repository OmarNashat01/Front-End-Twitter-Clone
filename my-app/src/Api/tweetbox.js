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

//POST TWEET
/**
 * Post Request that send information collected from TweetBox to the backend/database
 * @param {function} setLoading useState in order to check if the PostRequest is still sending the data
 * @param {function} setTweet useState used to retrive the response of the post request  
 * @param {formdata} formdata A FormData that is being passed having information whether it is a text or an image to be posted to the backend 
 */
export async function postTweet(setLoading, setTweet, formdata) {
  setLoading(true);
  let response;

  try {
    response = await postRequest("tweets", formdata);

    setTweet(response);
  } catch (error) {
    console.log(error);
    setTweet(error);
  }
  setLoading(false);
}

//POST REPLY
/**
 * Post Request that send information collected from Reply to the backend/database
 * @param {function} setLoading useState in order to check if the PostRequest is still sending the data
 * @param {function} setTweet useState used to retrive the response of the post request  
 * @param {formdata} formdata A FormData that is being passed having information whether it is a text or an image to be posted to the backend 
 */
export async function postReply(setLoading, setTweet, formdata) {
  setLoading(true);
  let response;

  try {
    response = await postRequest("users/comments", formdata);

    setTweet(response);
  } catch (error) {
    console.log(error);
    setTweet(error);
  }
  setLoading(false);
}

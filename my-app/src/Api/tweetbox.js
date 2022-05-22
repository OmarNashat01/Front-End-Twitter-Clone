import { postRequest, getRequest } from "./index";

// export async function postUserTweet(setLoading, setTweet, requestBody) {
//   setLoading(true);
//   let response;

//   try {
//     response = await postRequest("tweets", requestBody);

//     setTweet(response);
//   } catch (error) {
//     console.log(error);
//     setTweet(error);
//   }
//   setLoading(false);
// }

//POST TWEET
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

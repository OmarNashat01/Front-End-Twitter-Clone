import { response } from "msw";
import { getRequest, postRequest } from "./index";

export async function getMyTweets(setLoading, setPosts) {
  setLoading(true);

  try {
    const response = await getRequest("tweets/all/me");
    setPosts(response.data.tweets);
  } catch (error) {
    console.log(error.message);
  }
  setLoading(false);
}

export async function getUserTweets(setLoading, setUser, params) {
  //params is a string like => ?id=20
  // console.log(params);
  setLoading(true);

  try {
    const response = await getRequest(`tweets/all${params}`);
    setUser(response);
  } catch (error) {
    console.log(error.message);
  }
  setLoading(false);
}

export async function getUserLikedTweets(setLoading, setUser, params) {
  //params is a string like => ?id=20
  // console.log(params);
  setLoading(true);

  try {
    const response = await getRequest(`tweets/all${params}`);
    setUser(response);
  } catch (error) {
    console.log(error.message);
  }
  setLoading(false);
}

/**
 * this function is used to retrieve Posts to be viewed in the Home Feed of the logged-in User
 *
 * @param {function} setLoading  useState in order to check if the getRequest is still retrieving the data
 * @param {function} setPosts  useState used to retrieve the posts that is retrieved through out this request
 * @param {function} setHasMore  useSatet that indicates if our database has more posts to be retreived and it becomes false if there is no posts else to be retreived
 * @param {string} params this paramaters is used to pass number of page to be retrieved
 */
export async function getHomeTweets(setLoading, setPosts, setHasMore, params) {
  //params is a string like => ?id=20
  setLoading(true);

  try {
    const response = await getRequest(`tweets/random${params}`);
    if (response.status === 404) {
      setHasMore(false);
    } else {
      setHasMore(true);
      setPosts((prevPosts) => {
        return [...prevPosts, ...response.data.tweets];
      });
    }
  } catch (error) {
    console.log(error.message);
  }
  setLoading(false);
}

///////////////////////////////////////////////////////////////////////
// //get request for tweets with limit
// export async function fetchTweets(count,setLoading, setResponse,setPosts) {
//     setLoading(true);
//   try {
//     const response = await getRequestwithLimit("tweets/all",setPosts,count);
//     setResponse(response);
//   } catch (error) {
//     console.log(error.message);
//   }
//   setLoading(false);
// }

// export async function getMyID(setLoading, setResponse) {
//   setLoading(true);

//   try {
//     const response = await getRequest("users/me");
//     setResponse(response);
//   } catch (error) {
//     console.log(error.message);
//   }
//   setLoading(false);
// }

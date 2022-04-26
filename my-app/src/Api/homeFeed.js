import { getRequest ,getRequestwithLimit} from "./index";

//get request for tweets with limit
export async function fetchTweets(count,setLoading, setResponse,setPosts) {
    setLoading(true);
  try {
    const response = await getRequestwithLimit("tweets/all",setPosts,count);
    setResponse(response);
  } catch (error) {
    console.log(error.message);
  }
  setLoading(false);
}

export async function getMyID(setLoading, setResponse) {
  setLoading(true);

  try {
    const response = await getRequest("users/me");
    setResponse(response);
  } catch (error) {
    console.log(error.message);
  }
  setLoading(false);
}


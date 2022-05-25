import { postRequest, getRequest, putRequest, deleteRequest } from "./index";


export async function getMe(setLoading, setMe) {
    setLoading(true);

    try {
        const response = await getRequest("users/me");
        setMe(response);
    } catch (error) {
        console.log(error.message);
    }
    setLoading(false);
}


export async function getUser(setLoading, setUser, params) {
    //params is a string like => ?id=20
    // console.log(params);
    setLoading(true);

    try {
        const response = await getRequest(`users/user_id${params}`);
        setUser(response);
    } catch (error) {
        console.log(error.message);
    }
    setLoading(false);
}

export async function putUpdateUser(setLoading, setCoins, requestBody) {
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
        const response = await putRequest("u", requestBody);

        setCoins(response);
    } catch (error) {
        console.log(error);
        setCoins(error);
    }
    setLoading(false);
}

export async function deleteFollowing(setLoading, setId, params) {
    //params is a string like => ?id=20
    setLoading(true);

    try {
        const response = await deleteRequest(`users/following${params}`);
        setId(response);
    } catch (error) {
        console.log(error.message);
    }
    setLoading(false);
}

export async function sendFollow(setLoading, setTweet, requestBody) {
    setLoading(true);
    let response;

    try {
        response = await postRequest("users/following", requestBody);

        setTweet(response);
    } catch (error) {
        console.log(error);
        setTweet(error);
    }
    setLoading(false);
}
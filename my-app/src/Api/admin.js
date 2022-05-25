import { getRequest,postRequest } from "./index";

export async function getAllUsers(setLoading, setRes, params) {
    //params is a string like => ?id=20
    setLoading(true);

    try {
      const response = await getRequest(`users/all${params}`);
      setRes(response);
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  }

  export async function getReTweetCount(setLoading, setRes, params) {
    //params is a string like => ?id=20
    setLoading(true);

    try {
      const response = await getRequest(`admin/statistics/retweet_count${params}`);
      setRes(response);
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  }
  export async function getTweetCount(setLoading, setRes, params) {
    //params is a string like => ?id=20
    setLoading(true);

    try {
      const response = await getRequest(`admin/statistics/tweet_count${params}`);
      setRes(response);
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  }
  export async function getLikeCount(setLoading, setRes, params) {
    //params is a string like => ?id=20
    setLoading(true);

    try {
      const response = await getRequest(`admin/statistics/like_count${params}`);
      setRes(response);
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  }
  export async function getNewAccountsCount(setLoading, setRes, params) {
    //params is a string like => ?id=20
    setLoading(true);

    try {
      const response = await getRequest(`admin/statistics/new_account_count${params}`);
      setRes(response);
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  }
  export async function getSearchUsersAdmin(setLoading, setRes, params) {
    //params is a string like => ?id=20
    setLoading(true);

    try {
      const response = await getRequest(`users/search${params}`);
      setRes(response);
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  }
  export async function postBan(setLoading, setBan, requestBody) {

    setLoading(true);
  
    try {
      const response = await postRequest("admin/block", requestBody);
  
      setBan(response);
    } catch (error) {
      console.log(error);
      setBan(error);
    }
    setLoading(false);
  }
  

  export async function getBannedUsers(setLoading, setRes) {
    //params is a string like => ?id=20
    setLoading(true);

    try {
      const response = await getRequest(`admin/block`);
      setRes(response);
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  }
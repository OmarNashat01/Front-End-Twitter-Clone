import { postRequest, getRequest } from "./index";

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

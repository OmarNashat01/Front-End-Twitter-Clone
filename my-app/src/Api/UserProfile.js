import { postRequest, getRequest } from "./index";

/**
 * Get Request that retrieve all information belongs to the User that is currently logged in 
 * @param {function} setLoading useState in order to check if the getRequest is still retrieving the data
 * @param {function} setMe useState used to retrieve all info that belongs to current user that is logged in
 */
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
import { postRequest, getRequest } from "./index";

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
    setLoading(true);
    console.log(`products${params}`);

    try {
        const response = await getRequest(`users/user_id${params}`);
        setUser(response);
    } catch (error) {
        console.log(error.message);
    }
    setLoading(false);
}
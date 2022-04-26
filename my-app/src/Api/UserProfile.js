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
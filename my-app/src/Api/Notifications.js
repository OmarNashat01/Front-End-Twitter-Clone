import { getRequest, postRequest } from "./index";

export async function getNotifications(setLoading, setNotification, params) {
  //params is a string like => ?id=20
  setLoading(true);

  try {
    const response = await getRequest(`users/notifications/all${params}`);
    setNotification(response);
  } catch (error) {
    console.log(error.message);
  }
  setLoading(false);
}

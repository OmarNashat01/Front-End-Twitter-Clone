import { getRequest } from "./index";

export async function getSearchAllUsers(setLoading, setRes, params) {
  //params is a string like => ?id=20
  setLoading(true);

  try {
    const response = await getRequest(`users/search${params}`);
    if(response.status === 200)
    {
      
      if(typeof response.data.message !== 'undefined'){
        console.log("MESSAAAGE EXISST")
      }
      if(typeof response.data.users !== 'undefined'){
        console.log("USEERS EXISST")
        setRes(response.data.users);
      }
    }
  } catch (error) {
    console.log(error.message);
  }
  setLoading(false);
}

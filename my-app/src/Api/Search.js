import { getRequest } from "./index";

/**
 * Get Request that retrieve all users that contain the keyword inserted in the search bar 
 * @param {boolean} setLoading useState in order to check if the getRequest is still retrieving the data
 * @param {function} setRes array of users being retreived from this request that satisfies the search input being inserted 
 * @param {string} params  keyword of the search input being inserted to retrieve all users that contains this keyword 
 */
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

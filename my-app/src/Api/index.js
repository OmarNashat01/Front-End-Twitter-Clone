import axios from "axios";
import {useEffect, useState} from 'react'


const api = axios.create({
  baseURL: "http://localhost:3030/",
});
//BASE URL FOR API CALLS

api.defaults.headers.common["Authorization"] = "AUTH TOKEN";
// PUTTING THE AUTH TOKEN IN EVERY HEADER

//THESE ARE THE DEFAULTS FOR EVERY API CALL AND THEY ARE CONFIGURED ACCORDINGLY

//////////////////////////////////////////////////////////////////////

async function getExample() {
  try {
    let res = await api.get("/example");

    //handle success
    console.log("success");
  } catch (error) {
    //handle error
    console.log(`ERROR ${error}`);
  }
}

async function postExample(entryData) {
  try {
    let res = await api.get("/example", {
      entry1: "example",
      entry2: entryData,
      id: 3,
    });

    //handle success
    console.log("success");
  } catch (error) {
    //handle error
    console.log(`ERROR ${error}`);
  }
}
async function getFollowings(userID) {
    try {
      let res = await api.get("/users/following");
      //handle success
      console.log(res.data);
    } catch (error) {
      //handle error
      console.log(`ERROR ${error}`);  
    }
}
  

 function usePosts(userID, pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [posts, setPosts] = useState([])
  const [hasMore, setHasMore] = useState(false)

   useEffect(() => {
    setLoading(true)
    setError(false)
   
     api.get("/tweets/all",{
      params:{ 
        id: userID,
        page: pageNumber
      }
    }) .then(res => {
      setPosts(prevPosts => {
        return [...new Set([...prevPosts, ...res.data.tweets.map(p => p.text)])]
      })
      setHasMore(res.data.docs.length > 0)
      setLoading(false)
    }).catch(e => {
      setError(true)
      //handle error
      console.log(`ERROR ${error}`);  
    })
  }, [userID, pageNumber])

  return { loading, error, posts, hasMore }
}

export { getExample, postExample };

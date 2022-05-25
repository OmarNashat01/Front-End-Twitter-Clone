import React, { useEffect, useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from "./Loader";
import Post from "../Post/Post";
import { getMyTweets, getUserTweets, getUserLikedTweets } from "../../Api/homeFeed";
import axios from "axios";

function LikedFeed() {
  const count = 3
  const [posts, setPosts] = useState([]);
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const [error, setError] = useState(false)
 

  
//   useEffect(()=>{
//     getMyTweets(setLoading,setPosts);
//   },[])

  useEffect(() => {
    const getCurrentUserTweets = async () => {
      const data = await getUserLikedTweets(
        setLoading,
        setPosts,
        `?Id=${window.location.pathname.split("/")[2].toString()}`
      );
      //   console.log(
      //     `?user_id=${window.location.pathname.split("/")[2].toString()}`
      //   );
    };

    getCurrentUserTweets();
  }, []);
  
 



 if (!loading) {
//     console.log(posts[0].images);
//     console.log(posts[0].images.length);
    console.log(posts);
   }



 

  return (
    <div>
      {!loading &&
        posts.data.tweets.map((post, index) => {
          return <div key={index}>
            <Post
              displayName={post.name}
              username={post.username}
              verified="0"
              text={post.text}
              avatar={post.prof_pic_url}

              image={post.images===null? []:post.images}
              isLiked="false"
              isRetweet="false"
              likes={post.like_count}
              retweets={post.retweet_count}
            ></Post>
          </div>
        })}
    </div>
  );
}

export default LikedFeed;


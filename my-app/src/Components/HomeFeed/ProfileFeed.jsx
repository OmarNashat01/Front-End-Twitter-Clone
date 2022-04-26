import React, { useEffect, useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from "./Loader";
import Post from "../Post/Post";
import { getMyTweets } from "../../Api/homeFeed";
import axios from "axios";

function ProfileFeed() {
  const count = 3
  const [posts, setPosts] = useState([]);
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const [error, setError] = useState(false)

  
  useEffect(()=>{
    getMyTweets(setLoading,setPosts);
  },[])
  
 



  if (!loading) {
    console.log(posts[0].images);
    console.log(posts[0].images.length);
    console.log(response);
  }

 

  return (
    <div>
      {!loading &&
        posts.map((post, index) => {
          return <div key={index}>
            <Post
              displayName={post.name}
              username={post.username}
              verified="0"
              text={post.text}
              avatar={post.prof_pic_url}
              image={post.images}
              isLiked="true"
              isRetweet="false"
              likes={post.like_count}
              retweets={post.retweet_count}
            ></Post>
          </div>
        })}
    </div>
  );
}

export default ProfileFeed;

{/* {!loading && posts.map((post,index) => {
          return <div key={index}>
          <Post
            displayName={post.username}
            username={post.username}
            verified="1"
            text={post.text}
            avatar={post.prof_pic_url}
            image={"https://picsum.photos/seed/" + Math.random() + "/700/500"}
            isLiked="false"
            isRetweet="false"
            likes={post.like_count}
            retweets={post.retweet_count}
          ></Post>
        </div>
      })} */}
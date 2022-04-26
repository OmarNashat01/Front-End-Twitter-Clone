import React, { useEffect, useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from "./Loader";
import Post from "../Post/Post";
import { getHomeTweets } from "../../Api/homeFeed";


function HomeFeed() {
  const [posts, setPosts] = useState([]);
  const [loading , setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const [page,setPage]= useState(1);

  
  useEffect(()=>{
    getHomeTweets(setLoading,setPosts,setHasMore,`?page=1`);
  },[])
  
  const fetchData = () => {
    setPage(page + 1);
    getHomeTweets(setLoading,setPosts,setHasMore,`?page=${page}`);
  };

if(!loading){
  console.log(posts);
  console.log(posts.length);
}

  return (
  
    <div>
      <InfiniteScroll
        className="overflow-hidden"
        dataLength={posts.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<Loader />}
      > 
          { posts &&
              posts.map((post,index) => {
              return <div key={index}>
                <Post
                  displayName={post.name}
                  username={post.username}
                  verified="1"
                  text={post.text}
                  avatar={post.prof_pic_url}
                  image={ post.images.length === 0 ? "" : post.images[0].url}
                  isLiked="false"
                  isRetweet="false"
                  likes={post.like_count}
                  retweets={post.retweet_count}
                ></Post>
              </div>
            })
          }
  
      </InfiniteScroll>  
    </div>
  );
}

export default HomeFeed;

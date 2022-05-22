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


  useEffect(() => {
    getMyTweets(setLoading, setPosts);
  }, [])





  if (!loading) {
    console.log("imageeeeeeeeeeee");
    console.log(posts[1].images);
    console.log(posts[0].images.length);
    console.log(response);
  }

  const images_1 = [{ alt_text: '7:45 pm', height: 0, url: 'https://i.kym-cdn.com/entries/icons/facebook/000/003/269/smilejpg.jpg', width: 0 }, { alt_text: '7:45 pm', height: 0, url: 'https://i.kym-cdn.com/entries/icons/facebook/000/003/269/smilejpg.jpg', width: 0 }]


  return (
    <div>
      {!loading &&
        posts.map((post, index) => {
          return <div key={index}>
            <Post
              displayName={post.name}
              username={post.username}
              verified="true"
              text={post.text}
              avatar={post.prof_pic_url}
              image={images_1}
              isLiked="false"
              isRetweet="false"
              likes={post.like_count}
              retweets={post.retweet_count}
            ></Post>
          </div>
        })}
    </div >
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
import React, { useEffect, useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from "./Loader";
import Post from "../Post/Post";
import { getMyTweets } from "../../Api/homeFeed";
import axios from "axios";

function HomeFeed() {
  const count=3
  const [posts, setPosts] = useState([]);
  const [response,setResponse] = useState();
  const [loading , setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const [error, setError] = useState(false)

  
  useEffect(()=>{
    // fetchTweets();
    getMyTweets(setLoading,setPosts);
  },[])
  
  const fetchTweets = () => {
    setLoading(true);
    axios
      .get(`http://localhost:3030/tweets/all?count=${count}`)
      .then(res => {
        setPosts([...posts, ...res.data]);
      })
    setLoading(false);
    }

  

if(!loading){
  console.log(posts);
  console.log(response);
}

  const arrayOfPosts = [
    { displayName: "daniel",username: "danielhrg99", verified: "1", text: "This is my first post Hi everybody",avatar: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80",image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80",isLiked: "false",isRetweet: "false",likes:20,retweets: 22},
    { displayName: "john doe",username: "johndoe23", verified: "1", text: "egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque",avatar: "https://picsum.photos/seed/" + Math.random() + "/50/50",image:"https://picsum.photos/seed/" + Math.random() + "/700/500",isLiked: "false",isRetweet: "false",likes:20,retweets: 22},
    { displayName: "alfred",username: "alfredoo21", verified: "1", text: "egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque",avatar: "https://picsum.photos/seed/" + Math.random() + "/50/50",image:"https://picsum.photos/seed/" + Math.random() + "/700/500",isLiked: "false",isRetweet: "false",likes:20,retweets: 22},
    { displayName: "Masry",username: "masry10", verified: "1", text: "egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque",avatar: "https://picsum.photos/seed/" + Math.random() + "/50/50",image:"https://picsum.photos/seed/" + Math.random() + "/700/500",isLiked: "false",isRetweet: "false",likes:20,retweets: 22},
    { displayName: "kelman",username: "kelman78", verified: "1", text: "egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque",avatar: "https://picsum.photos/seed/" + Math.random() + "/50/50",image:"https://picsum.photos/seed/" + Math.random() + "/700/500",isLiked: "false",isRetweet: "false",likes:20,retweets: 22},
    { displayName: "carly",username: "carly60", verified: "1", text: "egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque",avatar: "https://picsum.photos/seed/" + Math.random() + "/50/50",image:"https://picsum.photos/seed/" + Math.random() + "/700/500",isLiked: "false",isRetweet: "false",likes:20,retweets: 22},
    { displayName: "amy",username: "Amy46", verified: "1", text: "egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque",avatar: "https://picsum.photos/seed/" + Math.random() + "/50/50",image:"https://picsum.photos/seed/" + Math.random() + "/700/500",isLiked: "false",isRetweet: "false",likes:20,retweets: 22},
    { displayName: "laila",username: "laila09", verified: "1", text: "egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque",avatar: "https://picsum.photos/seed/" + Math.random() + "/50/50",image:"https://picsum.photos/seed/" + Math.random() + "/700/500",isLiked: "false",isRetweet: "false",likes:20,retweets: 22},
    { displayName: "arnold",username: "arnold78", verified: "1", text: "egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque",avatar: "https://picsum.photos/seed/" + Math.random() + "/50/50",image:"https://picsum.photos/seed/" + Math.random() + "/700/500",isLiked: "false",isRetweet: "false",likes:20,retweets: 22},
  ];

  return (
    <div>
    <InfiniteScroll
      dataLength={posts.length}
      next={getMyTweets}
      hasMore={true}
      loader={<Loader />}
 >

        {!loading && 
            posts.map((post,index) => {
              return <div key={index}>
              <Post
                displayName={post.name}
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
          })}
 
    </InfiniteScroll>  
  </div>
  );
}

export default HomeFeed;

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
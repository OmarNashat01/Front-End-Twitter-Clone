import React from "react";

import Post from "../Post/Post";
import usePosts from "../../Api/index"

function HomeFeed() {

  // const {
  //   posts,
  //   hasMore,
  //   loading,
  //   error
  // } = usePosts(userID, pageNumber)

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
      {arrayOfPosts.map((post,index) => {
        return <div>
        <Post
          key={post.username}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
          isLiked={post.isLiked}
          isRetweet={post.isRetweet}
          likes={post.likes}
          retweets={post.retweets}
        ></Post>
      </div>
      })}
      
    </div>
  );
}

export default HomeFeed;

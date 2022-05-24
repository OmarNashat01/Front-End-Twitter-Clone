import React, { useEffect, useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import Post from "../Post/Post";
import { getTweet } from "../../Api/tweetFull";
import axios from "axios";
import TweetBox2 from "../TweetBox2/TweetBox2";

function Comments() {
    const count = 3
    const [posts, setPosts] = useState([]);
    const [response, setResponse] = useState();
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(false);
    const [error, setError] = useState(false);
    const [Replying, setReplying] = useState("");
    //const [tweetId, settweetId] = useState("6265b8efc557bc4aa2f038ab");


    useEffect(() => {
        getTweet(setLoading, setPosts, `?Id=${window.location.pathname.split("/")[2].toString()}`);
    }, [])





    if (!loading) {
        console.log("images");
        //console.log(posts.data.tweet.comments);
        //console.log(posts.data.tweet.comments[6].images);



    }

    const images_1 = [{ alt_text: '7:45 pm', height: 0, url: 'https://i.kym-cdn.com/entries/icons/facebook/000/003/269/smilejpg.jpg', width: 0 }, { alt_text: '7:45 pm', height: 0, url: 'https://i.kym-cdn.com/entries/icons/facebook/000/003/269/smilejpg.jpg', width: 0 }]


    return (
        <div>

            {!loading &&
                posts.data.tweet.comments.slice(0).reverse().map((post, index) => {
                    return <div key={index}>
                        <Post
                            user_id={post.user_id}
                            tweet_id={post.tweet_id}
                            displayName={post.name}
                            username={post.username}
                            verified="1"
                            text={post.text}
                            avatar={post.prof_pic_url}
                            image={post.images}
                            isLiked="false"
                            isRetweet="false"
                            likes={post.like_count}
                            retweets={post.retweet_count}
                            followers={post.followers_count}
                            following={post.following_count}
                            about={post.bio}
                            isReplying="true"
                            likers={post.liked_by_ids}
                            replyingUser={posts.data.tweet.username}
                        ></Post>
                    </div>
                })
            }

        </div>
    );
}
export default Comments;


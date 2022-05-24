import React, { useEffect, useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import Post from "../Post/PostFull";
import { getTweet } from "../../Api/tweetFull";
import axios from "axios";
import TweetBox2 from "../TweetBox2/TweetBox2";

function FullTweet() {
    const count = 3
    const [posts, setPosts] = useState([]);
    const [response, setResponse] = useState();
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(false);
    const [error, setError] = useState(false);
    //const [tweetId, settweetId] = useState("6265b8efc557bc4aa2f038ab");


    useEffect(() => {
        getTweet(setLoading, setPosts, `?Id=${window.location.pathname.split("/")[2].toString()}`);
    }, [])





    if (!loading) {
        console.log("FULL TWEET");
        //console.log(posts.data);


    }

    const images_1 = [{ alt_text: '7:45 pm', height: 0, url: 'https://i.kym-cdn.com/entries/icons/facebook/000/003/269/smilejpg.jpg', width: 0 }, { alt_text: '7:45 pm', height: 0, url: 'https://i.kym-cdn.com/entries/icons/facebook/000/003/269/smilejpg.jpg', width: 0 }]


    return (
        // !loading && (
        //     <Post
        //         displayName={posts.name}
        //         username={posts.username}
        //         verified="true"
        //         text={posts.text}
        //         avatar={posts.prof_pic_url}
        //         image={images_1}
        //         isLiked="false"
        //         isRetweet="false"
        //         likes={posts.like_count}
        //         retweets={posts.retweet_count}
        //     ></Post>
        // )
        !loading && (
            <Post
                user_id={posts.data.tweet.user_id}
                tweet_id={posts.data.tweet.tweet_id}
                displayName={posts.data.tweet.name}
                username={posts.data.tweet.username}
                verified="false"
                text={posts.data.tweet.text}
                avatar={posts.data.tweet.prof_pic_url}
                image={posts.data.tweet.images}
                isLiked="false"
                isRetweet="false"
                likes={posts.data.tweet.like_count}
                retweets={posts.data.tweet.retweet_count}
                followers={posts.data.tweet.followers_count}
                following={posts.data.tweet.following_count}
                about={posts.data.tweet.bio}
                likers={posts.data.tweet.liked_by_ids}
            //retweeters_ids={posts.data.tweet.retweeters_ids}
            ></Post>
        ));

};

export default FullTweet;

{/* <Post
user_id={posts.data.tweet.user_id}
displayName={posts.data.tweet.name}
username={posts.data.tweet.username}
verified="false"
text={posts.data.tweet.text}
avatar={posts.data.tweet.prof_pic_url}
image={posts.data.tweet.images}
isLiked="false"
isRetweet="false"
likes={posts.data.tweet.like_count}
retweets={posts.data.tweet.retweet_count}
followers={posts.data.tweet.followers_count}
following={posts.data.tweet.following_count}
about={posts.data.tweet.bio}
></Post> */}
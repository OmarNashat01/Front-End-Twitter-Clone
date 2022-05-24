import React, { useEffect, useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import Post from "../Post/Post";
import { getTweet } from "../../Api/tweetFull";
import axios from "axios";
import TweetBox2 from "../TweetBox2/TweetBox2";

function ReplyBox() {
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
        console.log("COMMENTS");
        //console.log(posts.data.tweet.comments);
        console.log(posts.data.tweet.username)



    }

    const images_1 = [{ alt_text: '7:45 pm', height: 0, url: 'https://i.kym-cdn.com/entries/icons/facebook/000/003/269/smilejpg.jpg', width: 0 }, { alt_text: '7:45 pm', height: 0, url: 'https://i.kym-cdn.com/entries/icons/facebook/000/003/269/smilejpg.jpg', width: 0 }]


    return (
        !loading && (
            <TweetBox2 disbaled={false} replyingUser={posts.data.tweet.username}>/</TweetBox2>
        ));

};

export default ReplyBox;


import { useEffect, useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from "./Loader";
import Post from "../Post/Post";
import { getHomeTweets } from "../../Api/homeFeed";

/**
 *  This componenet is responsable to view all Posts of User's tweets and Followers ones
 *  This is also responsable to view limited numbers of posts for each page and retrieve additional posts when reaching the end of the page
 * @returns {Object} 
 */

function HomeFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(1);


  useEffect(() => {
    getHomeTweets(setLoading, setPosts, setHasMore, `?page=1`);

  }, [])

  const fetchData = () => {
    setPage(page + 1);
    getHomeTweets(setLoading, setPosts, setHasMore, `?page=${page}`);

  };

  if (!loading) {
    console.log("homeee");
    console.log(posts[0].tweet_id);

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
        {posts &&
          posts.map((post, index) => {
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
              ></Post>
            </div>
          })
        }

      </InfiniteScroll>
    </div>
  );
}

export default HomeFeed;
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";
import Post from "../Post/Post";
import { getHomeTweetsAndRetweets } from "../../Api/homeFeed";

function HomeFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getHomeTweetsAndRetweets(setLoading, setPosts, setHasMore, `?page=1`);
  }, []);

  const fetchData = () => {
    setPage(page + 1);
    getHomeTweetsAndRetweets(setLoading, setPosts, setHasMore, `?page=${page}`);
  };

  if (!loading) {
    console.log("Postsssss");
    // console.log(posts);


  }
  const images_1 = ['https://i.kym-cdn.com/entries/icons/facebook/000/003/269/smilejpg.jpg', 'https://i.kym-cdn.com/entries/icons/facebook/000/003/269/smilejpg.jpg']


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
            if (post.type !== "retweet") {
              return <div key={index}>
                <Post
                  user_id={post.user_id}
                  tweet_id={post.tweet_id}
                  displayName={post.name}
                  username={post.username}
                  verified="1"
                  text={post.text}
                  avatar={post.prof_pic_url}
                  image={images_1}
                  isLiked="false"
                  //isRetweeted="true"
                  likes={post.like_count}
                  retweets={post.retweet_count}
                  followers={post.followers_count}
                  following={post.following_count}
                  about={post.bio}
                  isReplying="false"
                  likers={post.liked_by_ids}
                //retweeters_ids={post.retweeters_by_ids}
                ></Post>
              </div>
            } else if (post.quoted === true) {
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
                  //isRetweeted="true"
                  likes={post.like_count}
                  retweets={post.retweet_count}
                  followers={post.followers_count}
                  following={post.following_count}
                  about={post.bio}
                  isReplying="false"
                  likers={post.liked_by_ids}
                  isQuoted="true"
                  displayNameQ={post.tweet_refrenced.username}
                  usernameQ={post.tweet_refrenced.username}
                  textQ={post.tweet_refrenced.text}
                  avatarQ={post.tweet_refrenced.prof_pic_url}
                  imageQ={images_1}
                  user_idQ={post.tweet_refrenced.user_id}
                  tweet_idQ={post.tweet_refrenced.tweet_id}
                //retweeters_ids={post.retweeters_by_ids}
                ></Post>
              </div>
            }
            else {
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
                  isRetweeted="true"
                  likes={post.like_count}
                  retweets={post.retweet_count}
                  followers={post.followers_count}
                  following={post.following_count}
                  about={post.bio}
                  isReplying="false"
                  likers={post.liked_by_ids}
                  isQuoted="false"
                  displayNameQ={post.tweet_refrenced.username}
                  usernameQ={post.tweet_refrenced.username}
                  textQ={post.tweet_refrenced.text}
                  avatarQ={post.tweet_refrenced.prof_pic_url}
                  imageQ={images_1}
                  user_idQ={post.tweet_refrenced.user_id}
                  tweet_idQ={post.tweet_refrenced.tweet_id}
                //retweeters_ids={post.retweeters_by_ids}
                ></Post>
              </div>

            }
          })
        }

      </InfiniteScroll>
    </div>
  );
}

export default HomeFeed;

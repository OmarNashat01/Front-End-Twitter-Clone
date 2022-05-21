import React from "react";
import Header from "./Header";
import { getMe } from "../../../Api/UserProfile";
import Auxelary from "../../../hoc/Auxelary";
import Container from "react-bootstrap/esm/Container";
import Following from "./Following";
import { useState, useEffect } from "react";
import FollowigPageCSS from "./FollowigPage.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const FollowersPage = () => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState();
  const [follower, setFollower] = useState();

  useEffect(() => {
    const getCurrentUser = async () => {
      const data = await getMe(setLoading, setUserData);
    };
    getCurrentUser();
  }, []);

  useEffect(() => {
    if (!loading) {
      let followerList = userData.data.user.followers.map((followerAccount) => (
        <Following
          pic={followerAccount.prof_pic_url}
          username={followerAccount.name}
          handle={followerAccount.username}
          bio={followerAccount.bio}
        />
      ));

      setFollower(followerList);
    }
  }, [userData, loading]);

  if (!loading) {
    console.log(userData);
  }

  return (
    !loading && (
      // <
      // Router >
      // <
      // Routes >
      // <
      // Route path = "profile/following"
      // element = {
      <Auxelary>
        <Container>
          <Header
            user={userData.data.name}
            tweetnum={userData.data.tweet_count}
          />{" "}
          <nav className={FollowigPageCSS.alltabs}>
            <a className={FollowigPageCSS.tab}> Followers </a>{" "}
            <a
              className={FollowigPageCSS.tab}
              onClick={() => {
                window.open("/profile/following", "_self");
              }}
            >
              {" "}
              Followings{" "}
            </a>{" "}
          </nav>
          {/* list of follower accounts */}
          {follower}
        </Container>{" "}
      </Auxelary>
    )
    // }
    // /> < /
    // Routes > <
    // /
    // Router >
  );
};

export default FollowersPage;

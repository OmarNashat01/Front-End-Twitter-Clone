import React from "react";
import Header from "./Header";
import { getMe, getUser, sendFollow, deleteFollowing } from "../../../Api/UserProfile";
import Auxelary from "../../../hoc/Auxelary";
import Container from "react-bootstrap/esm/Container";
import Following from "./Following";
import { useState, useEffect } from "react";
import FollowingPageCSS from "./FollowigPage.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const FollowigPage = () => {
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState();
    const [following, setFollowing] = useState();

    useEffect(() => {
        const getCurrentUser = async() => {
            const data = await getMe(setLoading, setUserData);
        };
        getCurrentUser();
    }, []);



    useEffect(() => {
        if (!loading) {
            let followingList = userData.data.user.following.map(
                (followingAccount) => ( <
                    Following pic = { followingAccount.prof_pic_url }
                    username = { followingAccount.name }
                    handle = { followingAccount.username }
                    bio = { followingAccount.bio }
                    />
                )
            );

            setFollowing(followingList);
        }
    }, [userData, loading]);

    if (!loading) {
        console.log(userData);
    }

    return (!loading && (
            // <
            // Router >
            // <
            // Routes >
            // <
            // Route path = "profile/following"
            // element = {
            <
            Auxelary >
            <
            Container >
            <
            Header user = { userData.data.name }
            tweetnum = { userData.data.tweet_count }
            />{" "} <
            nav className = { FollowingPageCSS.alltabs } >
            <
            a className = { FollowingPageCSS.tab }
            onClick = {
                () => {
                    window.open("/profile/followers", "_self");
                }
            } > { " " }
            Followers { " " } <
            /a>{" "} <
            a className = { FollowingPageCSS.tab } > Followings < /a>{" "} < /
            nav > { /* list of following accounts */ } { following } <
            /Container>{" "} < /
            Auxelary >
        )
        // }
        // /> < /
        // Routes > <
        // /
        // Router >
    );
};

export default FollowigPage;
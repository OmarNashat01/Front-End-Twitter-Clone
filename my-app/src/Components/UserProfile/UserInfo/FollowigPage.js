import React from "react";
import Header from "./Header";
import { getMe } from "../../../Api/UserProfile";
import Auxelary from "../../../hoc/Auxelary";
import Container from "react-bootstrap/esm/Container";
import Following from "./Following";
import { useState, useEffect } from "react";
import FollowingPageCSS from "./FollowigPage.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const FollowigPage = () => {

    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState();

    useEffect(() => {

        const getCurrentUser = async() => {
            const data = await getMe(setLoading, setUserData);
        }
        getCurrentUser();

    }, []);

    if (!loading) {
        console.log(userData);
    }


    return (!loading &&
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
        /> <
        nav className = { FollowingPageCSS.alltabs } >
        <
        a className = { FollowingPageCSS.tab }
        onClick = {
            () => { window.open("/profile/followers", "_self") }
        } > Followers < /a> <
        a className = { FollowingPageCSS.tab } > Followings < /a>  < /
        nav >
        <
        Following pic = { userData.data.following[0].prof_pic_url }
        username = { userData.data.following[0].name }
        handle = { userData.data.following[0].username }
        bio = { userData.data.following[0].bio }
        />   <
        Following pic = { userData.data.following[1].prof_pic_url }
        username = { userData.data.following[1].name }
        handle = { userData.data.following[1].username }
        bio = { userData.data.following[1].bio }
        />  



        <
        /
        Container > < /
        Auxelary >
        // }
        // /> < /
        // Routes > <
        // /
        // Router >
    );
};

export default FollowigPage;
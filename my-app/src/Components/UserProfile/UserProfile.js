import React from "react";
import Auxelary from "../../hoc/Auxelary";
import Bio from "./UserInfo/Bio";
import Tabss from "./UserInfo/Tabs";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./UserInfo/Header";
import UserCSS from "./UserProfile.module.css";
import Popup from "./UserInfo/Popup";
import Container from "react-bootstrap/esm/Container";
import { useState, useEffect } from "react";
import Following from "./UserInfo/Following";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getMe } from "../../Api/UserProfile";
import ProfileFeed from "../HomeFeed/ProfileFeed";
import FollowingPage from "./UserInfo/FollowigPage";
import bell from "../../assets/bell.png";
import envelope from "../../assets/envelope-icon-14.png";
import dots from "../../assets/3dots.jpg";




// console.log("classes");
const UserProfile = () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState();
    const imageClick = () => {}

    useEffect(() => {

        const getCurrentUser = async() => {
            const data = await getMe(setLoading, setUserData);
        }
        getCurrentUser();

    }, []);

    if (!loading) {
        console.log(userData);
    }


    return (!loading && <
        Auxelary >
        <
        Container >
        <
        Header user = { userData.data.name }
        tweetnum = { userData.data.tweet_count }
        />{" "} 

        <
        div >
        <
        img src = { userData.data.cover_pic_url }
        alt = "pic"
        className = "img-fluid " / >
        <
        /div> <
        div className = { UserCSS.ProfilePic }
        onClick = {
            () => imageClick()
        } >
        <
        img src = { userData.data.prof_pic_url }
        alt = "pic"
        className = "img-fluid rounded-circle"
        height = { 140 }
        width = { 140 }

        /> < /
        div > { " " } <
        br / >
        <
        div className = { UserCSS.UserName } > { userData.data.name } < /div>{" "} <
        div className = { UserCSS.UserNamePro } > { userData.data.username } < /div> <Bio bio={userData.data.bio} joindate={userData.data.creation_date}
        fingcount = { userData.data.following_count }
        fercount = { userData.data.followers_count }
        bdate = { userData.data.date_of_birth }
        /> { " " } <
        Button variant = "outline-dark"
        size = "sm"
        className = { UserCSS.editbutton }
        onClick = {
            () => setButtonPopup(true)
        } >
        Edit Profile { " " } <
        /Button>




        <
        Tabss > < /Tabss> <
        Popup trigger = { buttonPopup }
        setTrigger = { setButtonPopup } > { " " } <
        /
        Popup >
        <
        ProfileFeed / > <
        /Container>{" "} < /
        Auxelary >
    );
};
export default UserProfile;
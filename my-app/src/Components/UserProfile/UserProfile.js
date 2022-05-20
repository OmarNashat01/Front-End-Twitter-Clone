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
import CloseButton from "react-bootstrap/CloseButton";
import envelope from "../../assets/envelope-icon-14.png";
import dots from "../../assets/3dots.jpg";

// console.log("classes");
const UserProfile = () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState();
    const imageClick = () => {};
    const [fullScreen, setfullScreen] = useState(false);
    const [fullScreenImg, setfullScreenImg] = useState("");

    function setImg(url) {
        setfullScreenImg(url);
    }

    function fullScreenTog() {
        setfullScreen(!fullScreen);
    }

    function closeImg() {
        // console.log("closseeeeeeeeeeeee");
        fullScreenTog();
    }

    useEffect(() => {
        const getCurrentUser = async() => {
            const data = await getMe(setLoading, setUserData);
        };
        getCurrentUser();
    }, []);

    if (!loading) {
        console.log(userData);
        console.log("loading ended");
        console.log(userData.data.user.cover_pic_url);
        console.log(userData.data.user.prof_pic_url);
    }

    return (!loading && ( <
            Auxelary >
            <
            Container >
            <
            Header user = { userData.data.user.name }
            tweetnum = { userData.data.user.tweet_count }
            />{" "} <
            div onClick = {
                () => {
                    setImg(userData.data.user.cover_pic_url);
                    fullScreenTog();
                }
            } >
            <
            img src = { userData.data.user.cover_pic_url }
            alt = "pic"
            className = "img-fluid " /
            >
            <
            /div>{" "} <
            div className = { UserCSS.ProfilePic }
            onClick = {
                () => {
                    setImg(userData.data.user.prof_pic_url);
                    fullScreenTog();
                }
            } >
            <
            img src = { userData.data.user.prof_pic_url }
            alt = "pic"
            className = "img-fluid rounded-circle"
            height = { 140 }
            width = { 140 }
            />{" "} < /
            div > { " " } <
            br / >
            <
            div className = { UserCSS.UserName } > { " " } { userData.data.user.name } { " " } <
            /div>{" "} <
            div className = { UserCSS.UserNamePro } > { " " } { userData.data.user.username } { " " } <
            /div>{" "} <
            Bio bio = { userData.data.user.bio }
            joindate = { userData.data.user.creation_date }
            fingcount = { userData.data.user.following_count }
            fercount = { userData.data.user.followers_count }
            bdate = { userData.data.user.date_of_birth }
            />{" "} <
            Button variant = "outline-dark"
            size = "sm"
            className = { UserCSS.editbutton }
            onClick = {
                () => setButtonPopup(true)
            } >
            Edit Profile { " " } <
            /Button> <
            Tabss > < /Tabss>{" "} <
            Popup trigger = { buttonPopup }
            setTrigger = { setButtonPopup } > { " " } <
            /Popup> <
            ProfileFeed / > { " " } <
            div id = "test" > {
                fullScreen ? ( <
                    div className = { UserCSS.fullscreen }
                    id = "full-div" >
                    <
                    CloseButton variant = "dark"
                    // className={PopCSS.innerPro1}
                    onClick = { closeImg }
                    />{" "} {
                    /* <CloseIcon
                                      className="close-icon"
                                      onClick={closeImg}
                                    ></CloseIcon> */
                } <
                img className = { UserCSS.imgfull }
                src = { fullScreenImg }
                alt = "" / >



                <
                /div>  
            ): null
        } <
        /div> < /
        Container > { " " } <
        /Auxelary>
    ));
};
export default UserProfile;
import React from "react";
import Auxelary from "../../hoc/Auxelary";
import Bio from "./UserInfo/Bio";
import Tabss from "./UserInfo/Tabs";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./UserInfo/Header";
import OthersCSS from "./OtherProfiles.module.css";
import Popup from "./UserInfo/Popup";
import Container from "react-bootstrap/esm/Container";
import { useState, useEffect } from "react";
import Following from "./UserInfo/Following";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getMe, getUser, sendFollow, deleteFollowing } from "../../Api/UserProfile";
import HomeFeed from "../HomeFeed/HomeFeed";
import FollowingPage from "./UserInfo/FollowigPage";
import bell from "../../assets/bell.png";
import envelope from "../../assets/envelope-icon-14.png";
import dots from "../../assets/3dots.jpg";
import UserFeed from "../HomeFeed/UserFeed";
import LikedFeed from "../HomeFeed/LikedFeed";
import CloseButton from "react-bootstrap/CloseButton";

// console.log("classes");
const OtherProfiles = () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState();
    const [loadingme, setMeLoading] = useState(true);
    const [meData, setMeData] = useState();
    const [loadingg, setLoadingg] = useState(true);
    const [userDataa, setUserDataa] = useState();
    const [fullScreen, setfullScreen] = useState(false);
    const [fullScreenImg, setfullScreenImg] = useState("");
    const [fullScreenp, setfullScreenp] = useState(false);
    const [fullScreenImgp, setfullScreenImgp] = useState("");
    const [loadinng, setLoadingFollow] = useState(true);
    const [fo, setfo] = useState();
    const [loadunf, setLoadingunf] = useState(true);
    const [unf, setUnf] = useState();

    const [following, setfollowing] = useState("");
    // const [fullScreenImg, setfullScreenImg] = useState("");

    function followTog() {
        setfollowing(!following);
    }

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

    function setImgp(url) {
        setfullScreenImgp(url);
    }

    function fullScreenTogp() {
        setfullScreenp(!fullScreenp);
    }

    function closeImgp() {
        // console.log("closseeeeeeeeeeeee");
        fullScreenTogp();
    }


    useEffect(() => {
        const getCurrentUser = async() => {
            const data = await getUser(
                setLoading,
                setUserData,
                `?_id=${window.location.pathname.split("/")[2].toString()}`
            );
            //   console.log(
            //     `?user_id=${window.location.pathname.split("/")[2].toString()}`
            //   );
        };

        getCurrentUser();
    }, []);

    if (!loading) {
        console.log(userData);
    }
    useEffect(() => {
        const getUser = async() => {
            const dataa = await getMe(setLoadingg, setUserDataa);
        };
        getUser();
    }, []);

    async function OnSubmit() {
        // API call


        if (!loading) {
            const Obj = {
                "source_user_id": meData.data.user._id,
                "target_user_id": window.location.pathname.split("/")[2].toString()
            };

            sendFollow(setLoadingFollow, setfo, Obj);
        }

        return true;
    }

    async function OnSubmitunf() {
        //  API call

        if (!loading) {

            deleteFollowing(
                setLoadingunf,
                setUnf,
                `?source_user_id=${meData.data.user._id}&target_user_id=${window.location.pathname.split("/")[2].toString()}`
            );
        }

        return true;
    }
    useEffect(() => {
        const getCurrentMe = async() => {
            const data = await getMe(setMeLoading, setMeData);
        };
        getCurrentMe();
    }, []);
    useEffect(() => {
        function see() {
            for (let i = 0; i < userData.data.user.followers.length; i++) {
                console.log("koko" + userData.data.user.followers[i].user_id)
                if (userData.data.user.followers[i].user_id === localStorage.getItem("user_id")) { setfollowing(true); break } else { setfollowing(false) }
            }
        }
    }, []);
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
                div className = { OthersCSS.ProfilePic }
                onClick = {
                    () => {
                        setImgp(userData.data.user.prof_pic_url);
                        fullScreenTogp();
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
                div className = { OthersCSS.UserName } > { " " } { userData.data.user.name } { " " } <
                /div>{" "} <
                div className = { OthersCSS.UserNamePro } > { " " } { userData.data.user.username } { " " } <
                /div>{" "} <
                Bio bio = { userData.data.user.bio }
                joindate = { userData.data.user.creation_date }
                fingcount = { userData.data.user.following_count }
                fercount = { userData.data.user.followers_count }
                bdate = { userData.data.user.date_of_birth }
                link = { userData.data.user.website }
                loc = { userData.data.user.location }
                />{" "}



                <
                Tabss > < /Tabss>{" "} <
                Popup trigger = { buttonPopup }
                setTrigger = { setButtonPopup } > { " " } <
                /Popup> 


                <
                div id = "test" > {
                    fullScreen ? ( <
                        div className = { OthersCSS.fullscreen }
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
                    img className = { OthersCSS.imgfullcov }
                    src = { fullScreenImg }
                    alt = "" / >
                    <
                    /div>  
                ): null
            } <
            /div>

            <
            div id = "test" > {
                fullScreenp ? ( <
                    div className = { OthersCSS.fullscreen }
                    id = "full-div" >
                    <
                    CloseButton variant = "dark"
                    // className={PopCSS.innerPro1}
                    onClick = { closeImgp }
                    />{" "} {
                    /* <CloseIcon
                                      className="close-icon"
                                      onClick={closeImg}
                                    ></CloseIcon> */
                } <
                img className = { OthersCSS.imgfullpro }
                src = { fullScreenImgp }
                alt = "" / >
                <
                /div>  
            ): null
        } <
        /div>


    <
    div id = "test" > {
        following ? ( <
            Button variant = "outline-dark"
            size = "sm"
            className = { OthersCSS.editbutton }
            onClick = {
                () => {
                    // setImg(userData.data.user.cover_pic_url);
                    OnSubmitunf();
                    followTog();
                }
            } >
            Following { " " } <
            /Button>  
        ) : ( <
                Button variant = "outline-dark"
                size = "sm"
                className = { OthersCSS.editbutton }
                onClick = {
                    () => {
                        OnSubmit();
                        followTog();
                    }
                } >
                Follow { " " } <
                /Button>)
            } <
            /div>




            <
            UserFeed / > { " " }


            <
            /Container>{" "} < /
        Auxelary >
    ));
};
export default OtherProfiles;
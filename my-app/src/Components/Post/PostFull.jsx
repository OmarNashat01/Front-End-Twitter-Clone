import React, { forwardRef } from "react";
import "./PostFull.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CloseIcon from "@mui/icons-material/Close";
import PublishIcon from "@mui/icons-material/Publish";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect, useState } from "react";
import { Dropdown, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import ToolTip from "./../Widgetbar/ToolTip/ToolTip";
import Col from "react-bootstrap/Col";
import { postLike, deleteLike, postRetweet, deleteRetweet } from "../../Api/tweetFull";
const PostFull = forwardRef(
    (
        {
            user_id,
            tweet_id,
            displayName,
            username,
            verified,
            text,
            image,
            avatar,
            isLiked,
            likes,
            isRetweet,
            retweets,
            followers,
            following,
            bio,
            likers,
        },
        ref
    ) => {
        const [Is_verified, setIs_verified] = useState(
            verified === "true" ? true : false
        );
        const [response, setresponse] = useState();
        const [loading, setLoading] = useState(true);
        const [counterLike, setCounter] = useState(likes);
        const [counterRetweets, setRetweets] = useState(retweets);
        const [textRetweets, setRetweets1] = useState("retweet");
        const [fullScreen, setfullScreen] = useState(false);
        const [fullScreenImg, setfullScreenImg] = useState("");
        const [imgs_count, setimgs_count] = useState(0);
        const [isLikedState, setIsLikedState] = useState(
            isLiked === "true" ? true : false
        );
        useEffect(() => {
            console.log("imageeeeeeeeeees");
            console.log(image);
            setimgs_count(image.length);
            var temp = image.map((x) => x.url);
            image = temp;
            console.log(image);
            var temp2 = likers.map((x) => x.liker);
            likers = temp2;
            if ((likers.includes(localStorage.getItem("user_id")))) {
                console.log("DA5AAL");
                setIsLikedState(true);
            }
            else {
                setIsLikedState(false);
            }
        }, []);
        const postObj = {
            "user_id": localStorage.getItem("user_id"),
            "tweet_id": window.location.pathname.split("/")[2].toString()

        };


        function setImg(url) {
            setfullScreenImg(url);
        }

        function fullScreenTog() {
            setfullScreen(!fullScreen);
        }

        function navProfile() {
            window.open(`/user/${user_id}`, "_self");
        }

        function closeImg() {
            console.log("closseeeeeeeeeeeee");
            fullScreenTog();
        }

        function imagesGrid() {
            if (imgs_count === 0) {
                return null;
            } else if (imgs_count === 1) {
                return (
                    <img
                        src={image[0].url}
                        className="img-post-full h-100-full w-100-full border-img-all-full img-height-full"
                        alt=""
                        onClick={() => {
                            setImg(image[0].url);
                            fullScreenTog();
                        }}
                    />
                );
            } else if (imgs_count === 2) {
                console.log(image[0]);
                return (
                    <div>
                        <Row className="w-100-full m-0-full">
                            <Col className="p-0-full img-height-full">
                                <img
                                    src={image[0].url}
                                    className="img-post-full h-100-full w-100-full full-border-left-full right-pad-full"
                                    alt=""
                                    onClick={() => {
                                        setImg(image[0].url);
                                        fullScreenTog();
                                    }}
                                />
                            </Col>
                            <Col className="p-0-full">
                                <img
                                    src={image[1].url}
                                    className="img-post-full h-100-full w-100-full full-border-right-full left-pad-full"
                                    alt=""
                                    onClick={() => {
                                        setImg(image[1].url);
                                        fullScreenTog();
                                    }}
                                />
                            </Col>
                        </Row>
                    </div>
                );
            } else if (imgs_count === 3) {
                return (
                    <div>
                        <Row className="w-100-full m-0-full">
                            <Col className="p-0-full">
                                <img
                                    src={image[0].url}
                                    className="img-post-full h-100-full w-100-full border-left-up-full right-pad-full down-pad-full"
                                    alt=""
                                    onClick={() => {
                                        setImg(image[0].url);
                                        fullScreenTog();
                                    }}
                                />
                            </Col>
                            <Col className="p-0">
                                <img
                                    src={image[1].url}
                                    className="img-post-full h-100-full w-100-full border-right-up-full left-pad-full down-pad-full"
                                    alt=""
                                    onClick={() => {
                                        setImg(image[1].url);
                                        fullScreenTog();
                                    }}
                                />
                            </Col>
                        </Row>
                        <img
                            src={image[2].url}
                            className="img-post-full w-100-full border-img-all-full border-left-right-full up-pad-full"
                            alt=""
                            onClick={() => {
                                setImg(image[2].url);
                                fullScreenTog();
                            }}
                        />
                    </div>
                );
            } else if (imgs_count >= 4) {
                return (
                    <div>
                        <Row className="w-100-full m-0-full">
                            <Col className="p-0">
                                <img
                                    src={image[0].url}
                                    className="img-post-full h-100-full w-100-full border-left-up-full right-pad-full down-pad-full"
                                    alt=""
                                    onClick={() => {
                                        setImg(image[0].url);
                                        fullScreenTog();
                                    }}
                                />
                            </Col>
                            <Col className="p-0">
                                <img
                                    src={image[1].url}
                                    className="img-post-full h-100-full w-100-full border-right-up-full left-pad-full down-pad-full"
                                    alt=""
                                    onClick={() => {
                                        setImg(image[1].url);
                                        fullScreenTog();
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="w-100-full m-0-full">
                            <Col className="p-0-full">
                                <img
                                    src={image[2].url}
                                    className="img-post-full h-100-full w-100-full border-left-down-full right-pad-full up-pad-full"
                                    alt=""
                                    onClick={() => {
                                        setImg(image[2].url);
                                        fullScreenTog();
                                    }}
                                />
                            </Col>
                            <Col className="p-0-full">
                                <img
                                    src={image[3].url}
                                    className="img-post-full h-100-full w-100-full border-right-down-full left-pad-full up-pad-full"
                                    alt=""
                                    onClick={() => {
                                        setImg(image[3].url);
                                        fullScreenTog();
                                    }}
                                />
                            </Col>
                        </Row>
                    </div>
                );
            }
        }

        function toggleFavColor(e) {
            //DELETE
            //axios.post('///',..., onsuccess: function(response) {
            //e.currentTarget.classList.remove("liked");
            //})
            //ADD
            //axios.post('///',..., onsuccess: function(response) {
            //e.currentTarget.classList.add("liked");
            //})
            if (!e.currentTarget.classList.contains("is-liked-full")) {
                e.currentTarget.classList.add("is-liked-full");
                setCounter(counterLike + 1);
                postLike(setLoading, setresponse, postObj);
                setIsLikedState(true);
            } else {
                e.currentTarget.classList.remove("is-liked-full");
                // document.getElementsByClassName("like-btns").classList.remove("is-liked");
                deleteLike(setLoading, setresponse, `?Id=${tweet_id}`)
                setCounter(counterLike - 1);
                setIsLikedState(false);
            }
            //  var elements = document.getElementById("like-trig");
            //  console.log("found");
            //    if(elements.classList.contains("is-liked"))
            //    {
            //    elements.classList.remove("is-liked");
            //    setCounter(counterLike + 1);
            //    }
            //  else{
            //    elements.classList.add("is-liked");
            //    setCounter(counterLike - 1);
            //  }
        }

        function toggleRetweets(e) {
            //DELETE
            //axios.post('///',..., onsuccess: function(response) {
            //e.currentTarget.classList.remove("liked");
            //})
            //ADD
            //axios.post('///',..., onsuccess: function(response) {
            //e.currentTarget.classList.add("liked");
            //})
            if (!e.currentTarget.classList.contains("is-retweet-full")) {
                e.currentTarget.classList.add("is-retweet-full");
                setRetweets(counterRetweets + 1);
                setRetweets1("undo");
                isRetweet = true;
            } else {
                e.currentTarget.classList.remove("is-retweet-full");
                setRetweets(counterRetweets - 1);
                setRetweets1("retweet");
                isRetweet = false;
            }
        }

        return (
            <div className="post-full" ref={ref}>
                <div className="post__avatar-full">
                    <ToolTip
                        user_id={user_id}
                        name={displayName}
                        tag={username}
                        img={avatar}
                        show="displayRight"
                        followers={followers}
                        following={following}
                        bio={bio}
                    />
                </div>
                <div className="post__body-full">
                    <div className="post__header-full">
                        <div className="post__headerText-full">
                            <h3>
                                {displayName}{" "}
                            </h3>
                            <span className="post__headerSpecial-full">
                                {Is_verified ? <VerifiedUserIcon className="post__badge-full verified-color-full" /> : null}
                                @{username}
                            </span>
                        </div>
                        <div className="post__headerDescription-full" >
                            <p className="text-overflow-full">{text}</p>
                        </div>
                    </div>
                    {imagesGrid()}
                    <div id="test">
                        {fullScreen ? (
                            <div className="full-screen-full" id="full-div">
                                <CloseIcon
                                    className="close-icon-full"
                                    onClick={closeImg}
                                ></CloseIcon>
                                <img className="img-full-full" src={fullScreenImg} alt="" />
                                <div className="post__footer__full-full">
                                    <div className="chat-full d-flex align-items-center">
                                        <ChatBubbleOutlineIcon
                                            fontSize="small"
                                            className="custom-icon-full-full"
                                        />
                                    </div>
                                    <Dropdown className=" d-flex align-items-center">
                                        <Dropdown.Toggle
                                            variant="secondary"
                                            id="dropdown-basic-full"
                                            className={
                                                isRetweet === "true"
                                                    ? "is-retweet-full d-flex align-items-center"
                                                    : "retweet-icon-full d-flex align-items-center"
                                            }
                                        >
                                            <RepeatIcon
                                                fontSize="small"
                                                className="custom-icon-full-full"
                                            />
                                            <span className="likeCounter-full-full">
                                                {counterRetweets}
                                            </span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1" onClick={toggleRetweets}>
                                                {textRetweets}
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <div
                                        className={
                                            isLikedState === true
                                                ? "is-liked-full d-flex align-items-center"
                                                : "fav-icon-full d-flex align-items-center"
                                        }
                                        id="like-trig"
                                        onClick={toggleFavColor}
                                    >
                                        <FavoriteBorderIcon
                                            fontSize="small"
                                            className="custom-icon-full-full"
                                        />
                                        <span className="likeCounter-full-full">{counterLike}</span>
                                    </div>
                                    <div className="publish-full ">
                                        <Dropdown className="d-flex align-items-center">
                                            <Dropdown.Toggle
                                                className="d-flex align-items-center"
                                                variant="secondary"
                                                id="dropdown-basic-full"
                                            >
                                                <PublishIcon
                                                    fontSize="small"
                                                    className="custom-icon-full-full"
                                                />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">
                                                    <BookmarkAddOutlinedIcon />
                                                    Bookmark
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        ) : null}
                    </div>
                    <div className="post__footer_full-full">
                        <div className="retweets-full-full d-flex align-items-center">
                            <span className="retweets-count-full" >{retweets}</span>
                            <span className="retweets-text-full">Retweets</span>
                        </div>
                        <div className="retweets-full-full ">
                            <span className="retweets-count-full" >{counterLike}</span>
                            <span className="retweets-text-full">Likes</span>
                        </div>
                    </div>
                    <div className="post__footer-full">
                        <div className="chat-full d-flex align-items-center">
                            <ChatBubbleOutlineIcon fontSize="small" className="custom-icon-full" />
                        </div>
                        <Dropdown className="d-flex align-items-center">
                            <Dropdown.Toggle
                                variant="secondary"
                                id="dropdown-basic"
                                className={
                                    isRetweet === "true"
                                        ? "is-retweet-full d-flex align-items-center"
                                        : "retweet-icon-full d-flex align-items-center"
                                }
                            >
                                <RepeatIcon fontSize="small" className="custom-icon-full" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1" onClick={toggleRetweets}>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <div
                            className={
                                isLikedState === true
                                    ? "is-liked-full d-flex align-items-center"
                                    : "fav-icon-full d-flex align-items-center"
                            }
                            onClick={toggleFavColor}
                        >
                            <FavoriteBorderIcon fontSize="small" className="custom-icon-full" />

                        </div>
                        <div className="publish-full ">
                            <Dropdown className="d-flex align-items-center">
                                <Dropdown.Toggle
                                    className="d-flex align-items-center"
                                    variant="secondary"
                                    id="dropdown-basic"
                                >
                                    <PublishIcon fontSize="small" className="custom-icon-full" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">
                                        <BookmarkAddOutlinedIcon />
                                        Bookmark
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
);

export default PostFull;

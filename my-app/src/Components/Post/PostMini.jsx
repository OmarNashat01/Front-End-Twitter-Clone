import React, { forwardRef } from "react";
import "./PostMini.css";
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
import ToolTip from "./PostTooltip";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
const PostMini = forwardRef(
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
            isReplying,
        },
        ref
    ) => {
        const [Is_verified, setIs_verified] = useState(
            verified === "true" ? true : false
        );
        const [counterLike, setCounter] = useState(likes);
        const [counterRetweets, setRetweets] = useState(retweets);
        const [textRetweets, setRetweets1] = useState("retweet");
        const [fullScreen, setfullScreen] = useState(false);
        const [fullScreenImg, setfullScreenImg] = useState("");
        const [imgs_count, setimgs_count] = useState(0);
        const [isLikedState, setIsLikedState] = useState(
            isLiked === "true" ? true : false
        );
        const [isFull, setisFull] = useState(true);
        useEffect(() => {
            setimgs_count(image.length);
            var temp = image.map((x) => x.url);
            image = temp;
            console.log(verified);
        }, []);


        function setImg(url) {
            setfullScreenImg(url);
        }

        function fullScreenTog(e) {
            setfullScreen(!fullScreen);
            e.stopPropagation();

        }

        function navProfile() {
            window.open(`/user/${user_id}`, "_self");
        }
        function navTweet() {
            window.open(`/tweet/${tweet_id}`, "_self");
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
                        className=" h-100 w-100 border-img-all"
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
                        <Row className="w-100 m-0">
                            <Col className="p-0">
                                <img
                                    src={image[0].url}
                                    className=" h-100 w-100 full-border-left right-pad"
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
                                    className=" h-100 w-100 full-border-right left-pad"
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
                        <Row className="w-100 m-0">
                            <Col className="p-0">
                                <img
                                    src={image[0].url}
                                    className=" h-100 w-100 border-left-up right-pad down-pad"
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
                                    className=" h-100 w-100 border-right-up left-pad down-pad"
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
                            className=" w-100 border-img-all border-left-right up-pad"
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
                        <Row className="w-100 m-0">
                            <Col className="p-0">
                                <img
                                    src={image[0].url}
                                    className=" h-100 w-100 border-left-up right-pad down-pad"
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
                                    className=" h-100 w-100 border-right-up left-pad down-pad"
                                    alt=""
                                    onClick={() => {
                                        setImg(image[1].url);
                                        fullScreenTog();
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="w-100 m-0">
                            <Col className="p-0">
                                <img
                                    src={image[2].url}
                                    className=" h-100 w-100 border-left-down right-pad up-pad"
                                    alt=""
                                    onClick={() => {
                                        setImg(image[2].url);
                                        fullScreenTog();
                                    }}
                                />
                            </Col>
                            <Col className="p-0">
                                <img
                                    src={image[3].url}
                                    className=" h-100 w-100 border-right-down left-pad up-pad"
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
        function stop_prop(e) {
            e.stopPropagation();
        }





        return (

            <Card id="card-outline" style={{ width: '98%' }}>
                <Card.Body>
                    <Card.Title id="card-title"><ToolTip
                        user_id={user_id}
                        name={displayName}
                        tag={username}
                        img={avatar}
                        show="displayRight"
                        followers={followers}
                        following={following}
                        bio={bio}
                    />
                        <div className="post__headerText-mini ">
                            <h3>
                                {displayName}{" "}
                                <span className="post__headerSpecial-mini ">
                                    {Is_verified ? <VerifiedUserIcon className="post__badge-mini  verified-color" /> : null}
                                    @{username}
                                </span>
                            </h3>
                        </div></Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                    {imagesGrid()}
                </Card.Body>
            </Card>
        );
    }
);

export default PostMini;

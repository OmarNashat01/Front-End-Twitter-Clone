import React, { forwardRef } from "react";
import "./Post.css";
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
import PostMini from "./PostMini"
import { postLike, deleteLike, postRetweet, deleteRetweet } from "../../Api/tweetFull";
const Post = forwardRef(
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
      isRetweet = "false",
      retweets,
      followers,
      following,
      bio,
      isReplying,
      likers,
      isRetweeted,
      isQuoted,
      replyingUser,
    },
    ref
  ) => {
    const [Is_verified, setIs_verified] = useState(
      verified === "true" ? true : false
    );
    const [response, setresponse] = useState();
    const [loading, setLoading] = useState(true);

    const [counterLike, setCounter] = useState(likes);
    const [isRetweetCol, setisRetweetCol] = useState(isRetweet);
    const [counterRetweets, setRetweets] = useState(retweets);
    const [textRetweets, setRetweets1] = useState("retweet");
    const [fullScreen, setfullScreen] = useState(false);
    const [fullScreenImg, setfullScreenImg] = useState("");
    const [imgs_count, setimgs_count] = useState(0);
    const [img_type, setimg_type] = useState(true);
    const [isLikedState, setIsLikedState] = useState(
      isLiked === "true" ? true : false
    );
    const [isFull, setisFull] = useState(true);
    const formData = new FormData();
    formData.append('quoted', false);
    formData.append('tweet_id', tweet_id);
    formData.append('text', text);
    formData.append('videos', []);
    formData.append('images', image);
    useEffect(() => {

      //formdata object
      //formData.append('user_id', localStorage.getItem("user_id"));   //append the values with key, value pair 
      setimgs_count(image.length);
      console.log("FOUUUUUUUUUND");
      var temp = image.map((x) => x.url);
      if (temp.length === 0) {
        console.log("mafeesh");
        setimg_type(false);
        console.log("7agmhaaaaaaa");


        console.log(image.length);
      }
      else {
        image = temp;
      }

      var temp2 = likers.map((x) => x.liker);
      likers = temp2;
      //console.log("LIKERSSSSSSSSSS")
      //console.log(likers);
      //console.log("USERRRR");
      //console.log();
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
      "tweet_id": tweet_id

    };



    const images_1 = [{ alt_text: '7:45 pm', height: 0, url: 'https://i.kym-cdn.com/entries/icons/facebook/000/003/269/smilejpg.jpg', width: 0 }, { alt_text: '7:45 pm', height: 0, url: 'https://i.kym-cdn.com/entries/icons/facebook/000/003/269/smilejpg.jpg', width: 0 }, { alt_text: '7:45 pm', height: 0, url: 'https://i.kym-cdn.com/entries/icons/facebook/000/003/269/smilejpg.jpg', width: 0 }, { alt_text: '7:45 pm', height: 0, url: 'https://i.kym-cdn.com/entries/icons/facebook/000/003/269/smilejpg.jpg', width: 0 }]
    function setImg(url) {
      setfullScreenImg(url);
    }

    function fullScreenTog(e) {
      setfullScreen(!fullScreen);



    }

    function navProfile() {
      window.open(`/user/${user_id}`, "_self");
    }
    function navTweet() {
      window.open(`/tweet/${tweet_id}`, "_self");
    }

    function closeImg(e) {
      console.log("closseeeeeeeeeeeee");
      fullScreenTog();

    }

    function imagesGrid() {
      if (imgs_count === 0) {
        return null;
      } else if (imgs_count === 1) {
        return (
          <img
            src={img_type ? image[0].url : image[0]}
            className="img-post h-100 w-100 border-img-all"
            alt=""
            onClick={() => {
              setImg(img_type ? image[0].url : image[0]);
              fullScreenTog();
            }}
          />
        );
      } else if (imgs_count === 2) {
        console.log(image[0]);
        return (
          <div >
            <Row className="w-100 m-0">
              <Col className="p-0">
                <img
                  src={img_type ? image[0].url : image[0]}
                  className="img-post h-100 w-100 full-border-left right-pad"
                  alt=""
                  onClick={() => {
                    setImg(img_type ? image[0].url : image[0]);
                    fullScreenTog();
                  }}
                />
              </Col>
              <Col className="p-0">
                <img
                  src={img_type ? image[1].url : image[1]}
                  className="img-post h-100 w-100 full-border-right left-pad"
                  alt=""
                  onClick={() => {
                    setImg(img_type ? image[1].url : image[1]);
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
                  className="img-post h-100 w-100 border-left-up right-pad down-pad"
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
                  className="img-post h-100 w-100 border-right-up left-pad down-pad"
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
              className="img-post w-100 border-img-all border-left-right up-pad"
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
                  className="img-post h-100 w-100 border-left-up right-pad down-pad"
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
                  className="img-post h-100 w-100 border-right-up left-pad down-pad"
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
                  className="img-post h-100 w-100 border-left-down right-pad up-pad"
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
                  className="img-post h-100 w-100 border-right-down left-pad up-pad"
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

    function toggleFavColor(e) {
      //DELETE
      //axios.post('///',..., onsuccess: function(response) {
      //e.currentTarget.classList.remove("liked");
      //})
      //ADD
      //axios.post('///',..., onsuccess: function(response) {
      //e.currentTarget.classList.add("liked");
      //})

      if (!e.currentTarget.classList.contains("is-liked")) {
        e.currentTarget.classList.add("is-liked");
        // debugger;
        // document.getElementsByClassName("like-btns").classList.add("is-liked");

        postLike(setLoading, setresponse, postObj);
        setCounter(counterLike + 1);
        setIsLikedState(true);
      } else {
        e.currentTarget.classList.remove("is-liked");
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
      e.stopPropagation();
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
      if (!e.currentTarget.classList.contains("is-retweet")) {
        e.currentTarget.classList.add("is-retweet");
        postRetweet(setLoading, setresponse, formData);
        setRetweets(counterRetweets + 1);
        setRetweets1("undo");
        setisRetweetCol(true);
      } else {
        e.currentTarget.classList.remove("is-retweet");
        //deleteLike(setLoading, setresponse, `?Id=${tweet_id}`)
        setRetweets(counterRetweets - 1);
        setRetweets1("retweet");
        setisRetweetCol(false);
      }
      e.stopPropagation();
    }

    return (
      <div className="post" ref={ref} >
        <div className="post__avatar">

          <ToolTip
            user_id={user_id}
            name={displayName}
            tag={username}
            img={avatar}
            show="displayRight"
            followers={followers}
            following={following}
            bio={bio} onClick={stop_prop}
          />
        </div>
        <div className="post__body">
          <div className="post__header" onClick={navTweet}>
            <div className="post__headerText">

              {isRetweeted === "true" ? (
                <RepeatIcon fontSize="small" />) : null}
              {isRetweeted === "true" ? (
                <span className="post__headerSpecial" style={{ marginLeft: '2%' }}>{username} Retweeted</span>) : null
              }

              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {Is_verified ? <VerifiedUserIcon className="post__badge verified-color" /> : null}
                  @{username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription" >

              {isReplying === "true" ? (
                <span className="replyingTo-post">Replying to <span className="replyingUser-post" >@{replyingUser}</span></span>) : null
              }
              <p className="text-overflow">{text}</p>
            </div>
          </div>
          {imagesGrid()}
          {isQuoted === "true" ? (
            <PostMini
              displayName={displayName}
              username={username}
              verified="false"
              text={text}
              avatar={avatar}
              image={images_1}
            ></PostMini>) : null
          }
          <div id="test">
            {fullScreen ? (
              <div className="full-screen" id="full-div">
                <CloseIcon
                  className="close-icon"
                  onClick={closeImg}
                ></CloseIcon>
                <img className="img-full" src={fullScreenImg} alt="" />
                <div className="post__footer__full">
                  <div className="chat d-flex align-items-center">
                    <ChatBubbleOutlineIcon
                      fontSize="small"
                      className="custom-icon-full"
                    />
                  </div>
                  <Dropdown className=" d-flex align-items-center">
                    <Dropdown.Toggle
                      variant="secondary"
                      id="dropdown-basic-full"
                      className={
                        isRetweetCol === true
                          ? "is-retweet d-flex align-items-center"
                          : "retweet-icon d-flex align-items-center"
                      }
                    >
                      <RepeatIcon
                        fontSize="small"
                        className="custom-icon-full"
                      />
                      <span className="likeCounter-full">
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
                        ? "is-liked d-flex align-items-center"
                        : "fav-icon d-flex align-items-center"
                    }
                    id="like-trig"
                    onClick={toggleFavColor}
                  >
                    <FavoriteBorderIcon
                      fontSize="small"
                      className="custom-icon-full"
                    />
                    <span className="likeCounter-full">{counterLike}</span>
                  </div>
                  <div className="publish ">
                    <Dropdown className="d-flex align-items-center" >
                      <Dropdown.Toggle
                        className="d-flex align-items-center"
                        variant="secondary"
                        id="dropdown-basic-full"

                      >
                        <PublishIcon
                          fontSize="small"
                          className="custom-icon-full"

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
          <div className={
            isReplying === "true"
              ? "post__footer_2"
              : "post__footer"
          }>
            <div className="chat d-flex align-items-center">
              <ChatBubbleOutlineIcon fontSize="small" className="custom-icon" />
            </div>
            <Dropdown className="d-flex align-items-center" onClick={stop_prop}>
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                className={
                  isRetweetCol === true
                    ? "is-retweet d-flex align-items-center"
                    : "retweet-icon d-flex align-items-center"
                }
              >
                <RepeatIcon fontSize="small" className="custom-icon" />
                <span className="likeCounter">{counterRetweets}</span>
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
                  ? "is-liked d-flex align-items-center"
                  : "fav-icon d-flex align-items-center"
              }
              onClick={toggleFavColor}
            >
              <FavoriteBorderIcon fontSize="small" className="custom-icon" />
              <span className="likeCounter">{counterLike}</span>
            </div>
            <div className="publish ">
              <Dropdown className="d-flex align-items-center" onClick={stop_prop}>
                <Dropdown.Toggle
                  className="d-flex align-items-center"
                  variant="secondary"
                  id="dropdown-basic"
                >
                  <PublishIcon fontSize="small" className="custom-icon" />
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

export default Post;

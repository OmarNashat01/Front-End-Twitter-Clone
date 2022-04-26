import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CloseIcon from '@mui/icons-material/Close';
import PublishIcon from "@mui/icons-material/Publish";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect, useState } from "react";
import { Dropdown, Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import Col from 'react-bootstrap/Col';
const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar, isLiked,likes,isRetweet,retweets }, ref) => {

import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import PublishIcon from "@mui/icons-material/Publish";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect, useState } from "react";
import { Dropdown, Row } from "react-bootstrap";
import { Container } from "react-bootstrap/Container";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
const Post = forwardRef(
  (
    {
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
    },
    ref
  ) => {
    const [counterLike, setCounter] = useState(likes);
    const [counterRetweets, setRetweets] = useState(retweets);
    const [textRetweets, setRetweets1] = useState("retweet");
    const [fullScreen, setfullScreen] = useState(false);
    const [fullScreenImg, setfullScreenImg] = useState("");


    function fullScreenTog(url){
      setfullScreen(!fullScreen);
      setfullScreenImg(url);
    //   debugger;
    //   var renderFull = <div className="full-screen" id = "full-div" >
    //   <CloseIcon className="close-icon" onClick={closeImg}></CloseIcon>
    //   <img className="img-full" src={image} alt=""   />
    //   <div className="post__footer__full">
    //     <div className="chat d-flex align-items-center">
    //       <ChatBubbleOutlineIcon fontSize="small" className="custom-icon-full" />
    //     </div>
    //     <Dropdown className=" d-flex align-items-center">
    //       <Dropdown.Toggle
    //         variant="secondary"
    //         id="dropdown-basic-full"
    //         className={
    //           isRetweet === "true"
    //             ? "is-retweet d-flex align-items-center"
    //             : "retweet-icon d-flex align-items-center"
    //         }
    //       >
    //         <RepeatIcon fontSize="small" className="custom-icon-full" />
    //         <span className="likeCounter-full">{counterRetweets}</span>
    //       </Dropdown.Toggle>
    //       <Dropdown.Menu>
    //         <Dropdown.Item href="#/action-1" onClick={toggleRetweets}>
    //           {textRetweets}
    //         </Dropdown.Item>
    //       </Dropdown.Menu>
    //     </Dropdown>
    //     <div
    //       className={
    //         isLiked === "true"
    //           ? "is-liked d-flex align-items-center"
    //           : "fav-icon d-flex align-items-center"
    //       }
    //       onClick={toggleFavColor}
    //     >
    //       <FavoriteBorderIcon fontSize="small" className="custom-icon-full" />
    //       <span className="likeCounter-full">{counterLike}</span>
    //     </div>
    //     <div className="publish ">
    //       <Dropdown className="d-flex align-items-center">
    //         <Dropdown.Toggle
    //           className="d-flex align-items-center"
    //           variant="secondary"
    //           id="dropdown-basic-full"
    //         >
    //           <PublishIcon fontSize="small" className="custom-icon-full" />
    //         </Dropdown.Toggle>

    //         <Dropdown.Menu>
    //           <Dropdown.Item href="#/action-1">
    //             <BookmarkAddOutlinedIcon />
    //             Bookmark
    //           </Dropdown.Item>
    //         </Dropdown.Menu>
    //       </Dropdown>
    //     </div>
    // </div>
    // </div>;    
    // document.getElementById("test").appendChild(renderFull);  
  }
  
      function imgFull(){
        
      if(fullScreen)
      debugger;
      return(
        <div className="full-screen" id = "full-div" >
          <CloseIcon className="close-icon" onClick={closeImg}></CloseIcon>
          <img className="img-full" src={image} alt=""   />
          <div className="post__footer__full">
            <div className="chat d-flex align-items-center">
              <ChatBubbleOutlineIcon fontSize="small" className="custom-icon-full" />
            </div>
            <Dropdown className=" d-flex align-items-center">
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic-full"
                className={
                  isRetweet === "true"
                    ? "is-retweet d-flex align-items-center"
                    : "retweet-icon d-flex align-items-center"
                }
              >
                <RepeatIcon fontSize="small" className="custom-icon-full" />
                <span className="likeCounter-full">{counterRetweets}</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" onClick={toggleRetweets}>
                  {textRetweets}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div
              className={
                isLiked === "true"
                  ? "is-liked d-flex align-items-center"
                  : "fav-icon d-flex align-items-center"
              }
              onClick={toggleFavColor}
            >
              <FavoriteBorderIcon fontSize="small" className="custom-icon-full" />
              <span className="likeCounter-full">{counterLike}</span>
            </div>
            <div className="publish ">
              <Dropdown className="d-flex align-items-center">
                <Dropdown.Toggle
                  className="d-flex align-items-center"
                  variant="secondary"
                  id="dropdown-basic-full"
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
      );

    }
  
    function loadProfile(){
      
    }
    function closeImg(){
      console.log("closseeeeeeeeeeeee");
      fullScreenTog(image);
    }
  
    function imagesGrid(imgs_count){
      if (imgs_count === 0){
        return(null);
      }
      else if(imgs_count === 1){
        return(
          <img src={image}  className="img-post w-100 border-img-all" alt="" onClick={fullScreenTog(image)}/>
        );
      }
      else if (imgs_count === 2) {
        return(
          <div>
            <Row className='w-100 m-0'>
            <Col className='p-0'><img src={image}  className="img-post w-100 border-img-all" alt="" onClick={fullScreenTog(image)}/></Col>
            <Col className='p-0'><img src={image}  className="img-post w-100 border-img-all" alt="" onClick={fullScreenTog(image)}/></Col>
            </Row>
          </div>
        )
      }
      else if (imgs_count === 3) {
        return(
          <div>
            <Row className='w-100 m-0'>
            <Col className='p-0'><img src={image}  className="img-post w-100 border-img-all" alt="" onClick={fullScreenTog(image)}/></Col>
            <Col className='p-0'><img src={image}  className="img-post w-100 border-img-all" alt="" onClick={fullScreenTog(image)}/></Col>
            </Row>
            <img src={image}  className="img-post w-100 border-img-all" alt="" onClick={fullScreenTog(image)}/>
          </div>
        )
      }
      else if (imgs_count >= 4) {
        return(
          <div>
            <Row className='w-100 m-0'>
            <Col className='p-0'><img src={image}  className="img-post w-100 border-img-all" alt="" onClick={fullScreenTog(image)}/></Col>
            <Col className='p-0'><img src={image}  className="img-post w-100 border-img-all" alt="" onClick={fullScreenTog(image)}/></Col>
            </Row>
            <Row className='w-100 m-0'>
            <Col className='p-0'><img src={image}  className="img-post w-100 border-img-all" alt="" onClick={fullScreenTog(image)}/></Col>
            <Col className='p-0'><img src={image}  className="img-post w-100 border-img-all" alt="" onClick={fullScreenTog(image)}/></Col>
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
       if (!e.currentTarget.classList.contains("is-liked")) {
         e.currentTarget.classList.add("is-liked");
         setCounter(counterLike + 1);
       } else {
         e.currentTarget.classList.remove("is-liked");
         setCounter(counterLike - 1);
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
      if (!e.currentTarget.classList.contains("is-retweet")) {
        e.currentTarget.classList.add("is-retweet");
        setRetweets(counterRetweets + 1);
        setRetweets1("undo");
        isRetweet = true;
      } else {
        e.currentTarget.classList.remove("is-retweet");
        setRetweets(counterRetweets - 1);
        setRetweets1("retweet");
        isRetweet = false;
      }
    }

    return (
      <div className="post" ref={ref} >
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          {imagesGrid(4)}
           {/* <img src={image} alt="" className="img-post" onClick={fullScreenTog} /> */}
            <div id="test">
              {fullScreen ? <div className="full-screen" id = "full-div" >
      <CloseIcon className="close-icon" onClick={closeImg}></CloseIcon>
      <img className="img-full" src={image} alt=""   />
      <div className="post__footer__full">
        <div className="chat d-flex align-items-center">
          <ChatBubbleOutlineIcon fontSize="small" className="custom-icon-full" />
        </div>
        <Dropdown className=" d-flex align-items-center">
          <Dropdown.Toggle
            variant="secondary"
            id="dropdown-basic-full"
            className={
              isRetweet === "true"
                ? "is-retweet d-flex align-items-center"
                : "retweet-icon d-flex align-items-center"
            }
          >
            <RepeatIcon fontSize="small" className="custom-icon-full" />
            <span className="likeCounter-full">{counterRetweets}</span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" onClick={toggleRetweets}>
              {textRetweets}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div
          className={
            isLiked === "true"
              ? "is-liked d-flex align-items-center"
              : "fav-icon d-flex align-items-center"
          }
          id="like-trig"
          onClick={toggleFavColor}
        >
          <FavoriteBorderIcon fontSize="small" className="custom-icon-full" />
          <span className="likeCounter-full">{counterLike}</span>
        </div>
        <div className="publish ">
          <Dropdown className="d-flex align-items-center">
            <Dropdown.Toggle
              className="d-flex align-items-center"
              variant="secondary"
              id="dropdown-basic-full"
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
               </div> : null}
            </div>
          <div className="post__footer">
            <div className="chat d-flex align-items-center">
              <ChatBubbleOutlineIcon fontSize="small" className="custom-icon" />
            </div>
            <Dropdown className="d-flex align-items-center">
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                className={
                  isRetweet === "true"
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
                isLiked === "true"
                  ? "is-liked d-flex align-items-center"
                  : "fav-icon d-flex align-items-center"
              }
              onClick={toggleFavColor}
            >
              <FavoriteBorderIcon fontSize="small" className="custom-icon" />
              <span className="likeCounter">{counterLike}</span>
            </div>
            <div className="publish ">
              <Dropdown className="d-flex align-items-center">
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

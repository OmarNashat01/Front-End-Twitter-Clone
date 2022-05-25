import React from "react";
import { useEffect, useState } from "react";
import { Form, useForm } from "usetheform";
import { Preview } from "./Preview/Preview";
import { PrivacyPicker } from "./PrivacyPicker/PrivacyPicker"
// import JSONTree from "react-json-tree";
import { WhatsHappeningBar } from "./WhatsHappeningBar/WhatsHappeningBar";
import { UploadMediaBar } from "./UploadMediaBar/UploadMediaBar";
import { Submit } from "./Submit/Submit";
import { CharacterCounter } from "./CharacterCounter/CharacterCounter";
import { Container, Row, Col } from 'react-bootstrap';
import TweetboxCSS from "./TweetBox2.module.css";
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { getMe } from "../../Api/UserProfile";
import { getTweet } from "../../Api/tweetFull";
import { postReply } from "../../Api/tweetbox";


const MAX_CHARS_ALLOWED = 280;
export default function TweetBox2({ disabled, setIsOpen, isOpen = false, replyingUser }) {
  const replyArray = [];


  const [replies, setreplies] = useState(replyArray);
  const [Me, setMe] = useState();
  const [Tweet, setTweet] = useState();
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);
  ////////////////////////-----MINAAA---///////////////////////////////////////////
  const [replypost, setReplyPost] = useState([]);

  const tweet_id = window.location.pathname.split("/")[2].toString();
  useEffect(() => {
    getMe(setLoading1, setMe);
    getTweet(setLoading2, setReplyPost, `?Id=${tweet_id}`);

  }, [])



  async function OnSubmit(state) {
    // make an API call
    // await submitForm(state)

    const { editor: { plainText }, media, ...resState } = state;

    if (isOpen) {
      setIsOpen(!isOpen)
    }
    console.log("onSubmit  => ", { ...resState, media, plainText });
    if (!loading1) {
      const formData = new FormData()
      formData.append("tweet_id", tweet_id);
      formData.append("text", plainText);
      if (typeof media != 'undefined') {
        for (let i = 0; i < media.length; i++) {
          formData.append("img", media[i]);
          console.log("mediaaaaaaa")
          console.log(media[i]);
        }
      }
      postReply(setLoading2, setTweet, formData);
      for (var pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }
    }


    return true;
  }
  ////////////////////////-----MINAAA---///////////////////////////////////////////





  function navProfile() {
    window.open(`/profile`, "_self");
  }

  return (
    <div className={TweetboxCSS.tweetbox} data-testid="tweetbox-1">
      {!loading1 && !loading2 && !disabled &&
        <Container>
          <span className={TweetboxCSS.replyingTo}>Replying to <span className={TweetboxCSS.replyingUser} >@{replyingUser}</span></span>
          <Row>
            <Col xs={2}>
              <IconButton className={TweetboxCSS.imageInput} onClick={navProfile}>
                <Avatar src={Me.data.prof_pic_url} style={{ width: "45px", height: "45px" }} />
              </IconButton>
            </Col>
            <Col xs={10} md={10} >
              <Form onSubmit={OnSubmit} onReset={() => console.log("ON RESETTT")} id="form-click"  >
                <WhatsHappeningBar maxChars={MAX_CHARS_ALLOWED} />
                <Preview />
                <span className={TweetboxCSS.thematicBreak} />
                <div id="test">
                  {true ? (
                    <div className={TweetboxCSS.actionBar}>
                      <UploadMediaBar />
                      <div className={TweetboxCSS.actionBar__Submit}>
                        <CharacterCounter maxChars={MAX_CHARS_ALLOWED} />
                        <span className={TweetboxCSS.thematicBreakVertical} />
                        <Submit OnSubmit={OnSubmit} />
                      </div>
                    </div>
                  ) : null
                  }
                </div>

                {/* form state viewer - debug only */}
                {/* <ReactJsonViewer /> */}
              </Form>
            </Col>
          </Row>
        </Container>}
    </div>
  );
}



// function ReactJsonViewer() {
//   const { state } = useForm();
//   return (
//     <div className="ReactJsonViewer">
//       <JSONTree data={state} />
//     </div>
//   );
// }
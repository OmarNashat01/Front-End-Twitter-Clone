import React from "react";
import { useEffect, useState } from "react";
import { Form } from "usetheform";
import {Preview } from "./Preview/Preview";
import {PrivacyPicker} from "./PrivacyPicker/PrivacyPicker"
// import JSONTree from "react-json-tree";
import { WhatsHappeningBar } from "./WhatsHappeningBar/WhatsHappeningBar";
import { UploadMediaBar } from "./UploadMediaBar/UploadMediaBar";
import { Submit } from "./Submit/Submit";
import { CharacterCounter } from "./CharacterCounter/CharacterCounter";
import { Container,Row,Col } from 'react-bootstrap';
import TweetboxCSS from "./TweetBox.module.css";
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { getMe } from "../../Api/UserProfile";
import {postUserTweet} from "../../Api/tweetbox"

const MAX_CHARS_ALLOWED = 280;
export default function TweetBox({
  avatar = "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",
}) {

  const [Me, setMe] = useState();
  const [Tweet,setTweet] = useState();
  const [loading , setLoading] = useState(true);
  const [loadingsss , setLoadingsss] = useState(true);

  useEffect(()=>{
    getMe(setLoading, setMe);
  },[])
  
  async function onSubmit(state) {
    // make an API call
    // await submitForm(state)
    const {
      editor: { plainText },
      ...resState
    } = state;

    console.log("onSubmit  => ", { ...resState, plainText });
    if(!loading){
        const postObj= {
          "text": plainText,
          "videos": [],
          "images": []
        };
        console.log(postObj);
        postUserTweet(setLoadingsss, setTweet, postObj); 
      }
    return true;
  }


  function navProfile() {
    window.open(`/profile`, "_self");
  }

  return (
    <div className={TweetboxCSS.tweetbox} data-testid="tweetbox-1">
      {!loading &&
      <Container>
        <Row>
          <Col xs={2}>
            <IconButton className={TweetboxCSS.imageInput}>
                <Avatar onClick={navProfile} src={Me.data.prof_pic_url} style={{width: "45px",height: "45px"}}/>
            </IconButton>
          </Col>
          <Col xs={10} md={10}>
            <Form onSubmit={onSubmit}>
              <WhatsHappeningBar maxChars={MAX_CHARS_ALLOWED} />
              {/* <Preview /> 
              <PrivacyPicker /> */}
              <span className={TweetboxCSS.thematicBreak} />
              <div className={TweetboxCSS.actionBar}>
                <UploadMediaBar />
                <div className={TweetboxCSS.actionBar__Submit}>
                  <CharacterCounter maxChars={MAX_CHARS_ALLOWED} />
                  <span className={TweetboxCSS.thematicBreakVertical} />
                  <Submit />
                </div>
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

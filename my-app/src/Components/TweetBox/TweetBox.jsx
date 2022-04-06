import React from "react";
import { Form } from "usetheform";
// import JSONTree from "react-json-tree";
import { WhatsHappeningBar } from "./WhatsHappeningBar/WhatsHappeningBar";
import { UploadMediaBar } from "./UploadMediaBar/UploadMediaBar";
import { Submit } from "./Submit/Submit";
import { CharacterCounter } from "./CharacterCounter/CharacterCounter";
import { Container, Row, Col } from "react-bootstrap";
import "./TweetBox.css";

const MAX_CHARS_ALLOWED = 280;
export default function TweetBox({
  avatar = "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",
}) {
  return (
    <div className="tweetBox" data-testid="tweetbox-1">
      <Container>
        <Row>
          <Col xs={2}>
            <img
              className="tweetBox__imageInput"
              src={avatar}
              alt="UserImage"
            />
          </Col>
          <Col xs={10} md={10}>
            <Form onSubmit={onSubmit}>
              <WhatsHappeningBar maxChars={MAX_CHARS_ALLOWED} />
              {/* <Preview /> */}
              {/* <PrivacyPicker /> */}
              <span className="thematicBreak" />
              <div className="actionBar">
                <UploadMediaBar />
                <div className="actionBar__Submit">
                  <CharacterCounter maxChars={MAX_CHARS_ALLOWED} />
                  <span className="thematicBreakVertical" />
                  <Submit />
                </div>
              </div>

              {/* form state viewer - debug only */}
              {/* <ReactJsonViewer /> */}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

async function onSubmit(state) {
  // make an API call
  // await submitForm(state)
  const {
    editor: { plainText },
    ...resState
  } = state;
  console.log("onSubmit  => ", { ...resState, plainText });
  return true;
}

// function ReactJsonViewer() {
//   const { state } = useForm();
//   return (
//     <div className="ReactJsonViewer">
//       <JSONTree data={state} />
//     </div>
//   );
// }

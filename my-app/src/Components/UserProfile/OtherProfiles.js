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
import { getMe, getUser } from "../../Api/UserProfile";
import HomeFeed from "../HomeFeed/HomeFeed";
import FollowingPage from "./UserInfo/FollowigPage";
import bell from "../../assets/bell.png";
import envelope from "../../assets/envelope-icon-14.png";
import dots from "../../assets/3dots.jpg";
import ProfileFeed from "../HomeFeed/ProfileFeed";

// console.log("classes");
const OtherProfiles = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState();
  const imageClick = () => {};

  useEffect(() => {
    const getCurrentUser = async () => {
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

  return (
    !loading && (
      <Auxelary>
        <Container>
          <Header
            user={userData.data.user.name}
            tweetnum={userData.data.user.tweet_count}
          />{" "}
          <div>
            <img
              src={userData.data.user.cover_pic_url}
              alt="pic"
              className="img-fluid "
            />
          </div>{" "}
          <div className={OthersCSS.ProfilePic} onClick={() => imageClick()}>
            <img
              src={userData.data.user.prof_pic_url}
              alt="pic"
              className="img-fluid rounded-circle"
              height={140}
              width={140}
            />{" "}
          </div>{" "}
          <br />
          <div className={OthersCSS.UserName}>
            {" "}
            {userData.data.user.name}{" "}
          </div>{" "}
          <div className={OthersCSS.UserNamePro}>
            {" "}
            {userData.data.user.username}{" "}
          </div>{" "}
          <Bio
            bio={userData.data.user.bio}
            joindate={userData.data.user.creation_date}
            fingcount={userData.data.user.following_count}
            fercount={userData.data.user.followers_count}
            bdate={userData.data.user.date_of_birth}
          />{" "}
          <Button
            variant="outline-dark"
            size="sm"
            className={OthersCSS.editbutton}
            onClick={() => setButtonPopup(true)}
          >
            Following{" "}
          </Button>
          <Button
            variant="outline-dark"
            size="sm"
            className={OthersCSS.bellbutton}
            onClick={() => setButtonPopup(true)}
          >
            <img src={bell} className={OthersCSS.bellicon} alt="pic" />
          </Button>{" "}
          <Button
            variant="outline-dark"
            size="sm"
            className={OthersCSS.envbutton}
            onClick={() => setButtonPopup(true)}
          >
            <img src={envelope} className={OthersCSS.envicon} alt="pic" />
          </Button>
          <Button
            variant="outline-dark"
            size="sm"
            className={OthersCSS.dotsbutton}
            onClick={() => setButtonPopup(true)}
          >
            <img src={dots} className={OthersCSS.doticon} alt="pic" />
          </Button>
          <Tabss> </Tabss>{" "}
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            {" "}
          </Popup>
          <ProfileFeed />{" "}
        </Container>{" "}
      </Auxelary>
    )
  );
};
export default OtherProfiles;

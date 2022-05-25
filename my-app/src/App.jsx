import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Post from "./Components/Post/Post";
import PostFull from "./Components/Post/PostFull";
import NotificationCard from "./Components/NotificationCard/NotificationCard";
import TestComponent from "./Components/Sidebar/TestComponent";
import UserProfile from "./Components/UserProfile/UserProfile";
import LikesPage from "./Components/UserProfile/LikesPage";
import Login from "./Components/Login/login";
import SignIn from "./Components/Login/signIn";
import SignUp from "./Components/Login/signUp";
import ForgotPassword from "./Components/Login/forgotPassword";
import UserPage from "./Components/UserPage/UserPage";
import FollowersPage from "./Components/UserProfile/UserInfo/FollowersPage";
import FollowingPage from "./Components/UserProfile/UserInfo/FollowigPage";
import AdminPage from "./Components/AdminPage/AdminPage";
import SearchUsers from "./Components/AdminPage/SearchUsers/SearchUsers";
import RetweetsStats from "./Components/AdminPage/RetweetsStats/RetweetsStats";
import TweetsStats from "./Components/AdminPage/TweetsStats/TweetsStats";
import BannedUsersTable from "./Components/AdminPage/BannedUsers/BannedUsers";
import NewAccountsStats from "./Components/AdminPage/NewAccountsStats/NewAccountsStats";
import OtherProfiles from "./Components/UserProfile/OtherProfiles";
import Navs2 from "./Components/SearchFeed/Navs/Navs2";
// FEEDS
import HomeNavbar from "./Components/HomeNavbar/HomeNavbar";
import HomeFeed from "./Components/HomeFeed/HomeFeed";
import ProfileFeed from "./Components/HomeFeed/ProfileFeed";
import SearchFeed from "./Components/SearchFeed/SearchFeed";
import NotificationFeed from "./Components/NotificationFeed/NotificationFeed";
import TweetFull from "./Components/FullTweet/FullTweet";
import Comments from "./Components/Post/Comments";
import ReplyBox from "./Components/Post/ReplyBox";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import TweetBox from "./Components/TweetBox/TweetBox";
import Widgetbar from "./Components/Widgetbar/Widgetbar";

import jwt_decode from "jwt-decode";
import { Reddit } from "@mui/icons-material";
import LikesStats from "./Components/AdminPage/LikesStats/LikesStats";
import TweetBox2 from "./Components/TweetBox2/TweetBox2";

//Mock-Service-Worker
// if (process.env.NODE_ENV === "development") {
//   const { worker } = require("./mocks/browser");
//   worker.start();
// }

function checkAuth(setIsAuth) {
  var token = localStorage.getItem("token");

  try {
    var decode = jwt_decode(token);
    console.log("decode var = " + decode);
    // var decodedHeader = jwt_decode(token, { header: true });
    // console.log(decodedHeader);
  } catch (error) {
    localStorage.clear();
    return <Navigate to="/" />;
  }

  if (token !== null) {
    setIsAuth(true);
  }
  console.log(token);
}

function App() {
  //indicates if user is authenticated
  var authBool = false;
  var token = localStorage.getItem("token");
  const [disabled, setDisabled] = useState(false);

  try {
    var decode = jwt_decode(token);
    console.log("decode var = " + decode);
  } catch (error) {
    localStorage.clear();
    token = null;
    <Navigate to="/" />;
  }

  if (token !== null) {
    authBool = true;
  }

  console.log(authBool);
  const [isAuth, setIsAuth] = useState(authBool);

  //{checkAuth(setIsAuth)}
  var page = 1;

  if (localStorage.getItem("admin") === "true") {
    //return <Navigate to="/adminhome" />
    //window.location.assign("http://google.com")
    // window.open("/adminhome","_self");
  }

  if (page === 0) {
    return <Login />;
  }

  if (page === 1) {
    const images_1 = [
      {
        alt_text: "7:45 pm",
        height: 0,
        url: "https://cdn1.vectorstock.com/i/1000x1000/37/90/close-up-of-colorful-eyes-cat-vector-23633790.jpg",
        width: 0,
      },
      {
        alt_text: "7:45 pm",
        height: 0,
        url: "https://cdn1.vectorstock.com/i/1000x1000/37/90/close-up-of-colorful-eyes-cat-vector-23633790.jpg",
        width: 0,
      },
    ];
    return (
      <Router>
        <Routes>
          {/* UNDO THIS CHANGE */}
          <Route path="/" element={<Login />} />
          <Route path={"/singin"} element={<SignIn />} />
          <Route path={"/singup"} element={<SignUp />} />
          <Route path={"/forgotPassword"} element={<ForgotPassword />} />

          <Route
            path="/home"
            element={
              isAuth === true ? (
                <div className=" container-fluid">
                  <div className="row h-100">
                    <div className="main-screen col col-md-2 col-lg-2 col-sm-1 col-xs-1 sticky-top ">
                      <Sidebar setDisabled={setDisabled} />
                    </div>
                    <div className="col col-md-6 col-lg-5 col-sm-9   col-xs-8 ">
                      <HomeNavbar />
                      <TweetBox disabled={disabled} />
                      <HomeFeed />
                    </div>
                    <div className="col col-md-3 col-lg-4 col-sm-3 .d-none .d-lg-block .d-xl-none ">
                      <Widgetbar />
                    </div>
                  </div>
                </div>
              ) : (
                <Navigate to="/" />
              )
            }
          />

          <Route
            path="/explore"
            element={
              isAuth === true ? (
                <div className=" container-fluid">
                  <div className="row">
                    <div className="main-screen col col-md-2 col-lg-2 col-sm-1 col-xs-1 sticky-top">
                      <Sidebar setDisabled={setDisabled} />
                    </div>
                    <div className="col col-md-6 col-lg-5 col-sm-9   col-xs-8">
                      <HomeFeed />
                    </div>
                    <div className="col col-md-3 col-lg-4 col-sm-3 .d-none .d-lg-block .d-xl-none ">
                      <Widgetbar />
                    </div>
                  </div>
                </div>
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/notifications"
            element={
              isAuth === true ? (
                <div className=" container-fluid">
                  <div className="row">
                    <div className="main-screen col col-md-2 col-lg-2 col-sm-1 col-xs-1 sticky-top">
                      <Sidebar setDisabled={setDisabled} />
                    </div>
                    <div className="col col-md-6 col-lg-5 col-sm-9   col-xs-8">
                      <HomeNavbar text={"Notifications"} />
                      <Navs2 />
                      <NotificationFeed />
                    </div>
                    <div className="col col-md-3 col-lg-4 col-sm-3 .d-none .d-lg-block .d-xl-none ">
                      <Widgetbar />
                    </div>
                  </div>
                </div>
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/bookmarks"
            element={
              isAuth === true ? (
                <div className=" container-fluid">
                  <div className="row">
                    <div className="main-screen col col-md-2 col-lg-2 col-sm-1 col-xs-1 sticky-top">
                      <Sidebar setDisabled={setDisabled} />
                    </div>
                    <div className="col col-md-6 col-lg-5 col-sm-9   col-xs-8">
                      <TestComponent name="bookmarks" />
                    </div>
                    <div className="col col-md-3 col-lg-4 col-sm-3 .d-none .d-lg-block .d-xl-none ">
                      <Widgetbar />
                    </div>
                  </div>
                </div>
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/profile"
            element={
              isAuth === true ? (
                <div className=" container-fluid">
                  <div className="row">
                    <div className="main-screen col col-md-2 col-lg-2 col-sm-1 col-xs-1 sticky-top">
                      <Sidebar setDisabled={setDisabled} />
                    </div>
                    <div className="col col-xs-6 col-md-6 col-lg-5 col-sm-9   col-xs-8">
                      <div>
                        <UserProfile />
                      </div>
                    </div>
                    <div className="col col-md-3 col-lg-4 col-sm-3 .d-none .d-lg-block .d-xl-none ">
                      <Widgetbar />
                    </div>
                  </div>
                </div>
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/profile/following"
            element={
              isAuth === true ? (
                <div className=" container-fluid">
                  <div className="row">
                    <div className="main-screen col col-md-2 col-lg-2 col-sm-1 col-xs-1 sticky-top">
                      <Sidebar setDisabled={setDisabled} />
                    </div>
                    <div className="col col-md-6 col-lg-5 col-sm-9   col-xs-8">
                      <div>
                        <FollowingPage />
                        {/* TODO:for testing */}
                        {/* <HomeFeed /> */}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Navigate to="/" />
              )
            }
          />
<Route
            path="/profile/likes"
            element={
              isAuth === true ? (
                <div className=" container-fluid">
                  <div className="row">
                    <div className="main-screen col col-md-2 col-lg-2 col-sm-1 col-xs-1 sticky-top">
                      <Sidebar setDisabled={setDisabled} />
                    </div>
                    <div className="col col-md-6 col-lg-5 col-sm-9   col-xs-8">
                      <div>
                        <LikesPage />
                        {/* TODO:for testing */}
                        {/* <HomeFeed /> */}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Navigate to="/" />
              )
            }
          />

          <Route
            path="/profile/followers"
            element={
              isAuth === true ? (
                <div className=" container-fluid">
                  <div className="row">
                    <div className="main-screen col col-md-2 col-lg-2 col-sm-1 col-xs-1 sticky-top">
                      <Sidebar setDisabled={setDisabled} />
                    </div>
                    <div className="col col-md-6 col-lg-5 col-sm-9   col-xs-8">
                      <div>
                        <FollowersPage />
                        {/* TODO:for testing */}
                        {/* <HomeFeed /> */}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Navigate to="/" />
              )
            }
          />

          <Route
            path="/search/*"
            element={
              isAuth === true ? (
                <div className=" container-fluid">
                  <div className="row">
                    <div className="main-screen col col-md-2 col-lg-2 col-sm-1 col-xs-1 sticky-top">
                      <Sidebar setDisabled={setDisabled} />
                    </div>
                    <div className="col col-md-6 col-lg-5 col-sm-9   col-xs-8">
                      <SearchFeed />
                    </div>
                    <div className="col col-md-3 col-lg-4 col-sm-3 .d-none .d-lg-block .d-xl-none ">
                      <Widgetbar showSearchbar={false} />
                    </div>
                  </div>
                </div>
              ) : (
                <Navigate to="/" />
              )
            }
          />

          <Route
            path="/user/*"
            element={
              isAuth === true ? (
                <div className=" container-fluid">
                  <div className="row">
                    <div className="main-screen col col-md-2 col-lg-2 col-sm-1 col-xs-1 sticky-top">
                      <Sidebar setDisabled={setDisabled} />
                    </div>
                    <div className="col col-md-6 col-lg-5 col-sm-9   col-xs-8">
                      <div>
                        <OtherProfiles />
                        {/* TODO:for testing */}
                        {/* <HomeFeed /> */}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/tweet/*"
            element={
              isAuth === true ? (
                <div className=" container-fluid">
                  <div className="row h-100">
                    <div className="main-screen col col-md-2 col-lg-2 col-sm-1 col-xs-1 sticky-top ">
                      <Sidebar setDisabled={setDisabled} />
                    </div>
                    <div className="col col-md-7 col-lg-6 col-sm-10   col-xs-9 ">
                      <HomeNavbar text={"Tweet"} />
                      <TweetFull></TweetFull>
                      <ReplyBox />
                      <Comments />
                    </div>
                  </div>
                </div>
              ) : (
                <Navigate to="/" />
              )
            }
          />

          <Route path="/adminhome" element={<TweetsStats />} />
          <Route path="/adminsearch" element={<SearchUsers />} />
          <Route path="/retweets" element={<RetweetsStats />}></Route>
          <Route path="/likes" element={<LikesStats />}></Route>
          <Route path="/banned" element={<BannedUsersTable />}></Route>
          <Route path="/newaccounts" element={<NewAccountsStats />}></Route>
        </Routes>
      </Router>
    );
  }

  //TESTING FOR ADMIN PAGE

  //   if (page === 2) {
  //     return (
  //       <div>
  //         <Router>
  //           <nav className="sticky-top">{/* //     <AdminNavBar /> */}</nav>
  //           <Routes>
  //             <Route path="/adminhome" element={<AdminPage />}></Route>
  //             <Route path="/adminsearch" element={<SearchUsers />}></Route>

  //           </Routes>
  //         </Router>
  //       </div>
  //     );
  //   }
}

export default App;

import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";

import TestComponent from "./Components/Sidebar/TestComponent";
import UserProfile from "./Components/UserProfile/UserProfile";
import Login from "./Components/Login/login";
import UserPage from "./Components/UserPage/UserPage";

import AdminNavBar from "./Components/AdminPage/AdminNavBar/AdminNavBar";
import AdminPage from "./Components/AdminPage/AdminPage";
import SearchUsers from "./Components/AdminPage/SearchUsers/SearchUsers";
// FEEDS

import HomeFeed from "./Components/HomeFeed/HomeFeed";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import TweetBox from "./Components/TweetBox/TweetBox";
import Widgetbar from "./Components/Widgetbar/Widgetbar";

function App() {
  var page = 1;

  if (page === 0) {
    return <Login />;
  }

  if (page === 1) {
    return (
      <Router>
  
              <Routes>
                <Route
                  path="/home"
                  element={
                    <div className=" container-fluid">
                      <div className="row">
                        <div className="main-screen col col-md-3 col-lg-3 col-sm-2 col-xs-1 sticky-top">
                          <Sidebar />
                        </div>
                        <div className="col col-md-6 col-lg-5 col-sm-9   col-xs-8">
                          <TweetBox />
                          <HomeFeed />
                        </div>
                        <div className="col col-md-3 col-lg-4 col-sm-3 ">
                           <Widgetbar />  
                        </div>
                     </div>
                    </div>
                  }
                />
                
                <Route path="/explore" element={
                <div className=" container-fluid">
                <div className="row">
                  <div className="main-screen col col-md-3 col-lg-3 col-sm-2 col-xs-1 sticky-top">
                    <Sidebar />
                  </div>
                  <div className="col col-md-6 col-lg-5 col-sm-9   col-xs-8">
                    <HomeFeed />
                  </div>
                  </div>
                  </div>
                } />
                <Route
                  path="/notifications"
                  element={
                    <div className=" container-fluid">
                    <div className="row">
                      <div className="main-screen col col-md-3 col-lg-3 col-sm-2 col-xs-1 sticky-top">
                        <Sidebar />
                      </div>
                      <div className="col col-md-6 col-lg-5 col-sm-9   col-xs-8">
                        <TestComponent name="notification" />
                      </div>
                    </div>
                    </div>}
                />
                <Route
                  path="/bookmarks"
                  element={
                  <div className=" container-fluid">
                  <div className="row">
                    <div className="main-screen col col-md-3 col-lg-3 col-sm-2 col-xs-1 sticky-top">
                      <Sidebar />
                    </div>
                    <div className="col col-md-6 col-lg-5 col-sm-9   col-xs-8">
                      <TestComponent name="bookmarks" />
                      </div>
                      </div>
                      </div>}
                />
                <Route
                  path="/profile"
                  element={
                    <div className=" container-fluid">
                  <div className="row">
                    <div className="main-screen col col-md-3 col-lg-3 col-sm-2 col-xs-1 sticky-top">
                      <Sidebar />
                    </div>
                    <div className="col col-md-6 col-lg-5 col-sm-9   col-xs-8">
                    <div>
                      <UserProfile />
                      <HomeFeed />
                    </div>
                    </div>
                    </div>
                    </div>
                  }
                />
              </Routes>
      </Router>
    );
  }

  if (page === 2) {
    return (
      <div>
        <Router>
          <nav className="sticky-top">
            <AdminNavBar />
          </nav>
          <Routes>
            <Route path="/" element={<AdminPage />}></Route>
            <Route path="/search" element={<SearchUsers />}></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;

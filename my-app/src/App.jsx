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

function App() {
  var page = 1;

  if (page === 0) {
    return <Login />;
  }

  if (page === 1) {
    return (
      <Router>
        <div className=" container-fluid">
          <div className=" row">
            <div className="main-screen col col-md-3 col-lg-4 col-sm-2 col-xs-1 sticky-top">
              <Sidebar />
            </div>

            <div className="col col-md-6 col-lg-5 col-sm-9   col-xs-8">
              <Routes>
                <Route
                  path="/home"
                  element={
                    <div>
                      <TweetBox />
                      <HomeFeed />
                    </div>
                  }
                />
                <Route path="/explore" element={<HomeFeed />} />
                <Route
                  path="/notifications"
                  element={<TestComponent name="notification" />}
                />
                <Route
                  path="/bookmarks"
                  element={<TestComponent name="bookmarks" />}
                />
                <Route
                  path="/profile"
                  element={
                    <div>
                      <UserProfile />
                      <HomeFeed />
                    </div>
                  }
                />
              </Routes>
            </div>
          </div>
        </div>
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

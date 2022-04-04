import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import TestComponent from "./Components/Sidebar/TestComponent";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className=" container-fluid">
        <div className=" row">
          <div className="main-screen col col-md-3 col-lg-4 col-sm-2 col-xs-1 sticky-top">
            <Sidebar />
          </div>

          <div className="col col-md-6 col-lg-5 col-sm-9   col-xs-8">
            <Routes>
              <Route path="/" element={<TestComponent name="home" />} />
              <Route
                path="/explore"
                element={<TestComponent name="explore" />}
              />
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
                element={<TestComponent name="profile" />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

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
          <div className="main-screen col col-md-3 col-lg-4 col-sm-3 sticky-top">
            <Sidebar />
          </div>

          <div className="col col-md-6 col-lg-4 col-sm-6">
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

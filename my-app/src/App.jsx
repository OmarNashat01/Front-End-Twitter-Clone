import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import TweetBox from "./Components/TweetBox/TweetBox";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  return (
    <div className=" container-fluid">
      <div className=" row">
        <div className="main-screen col col-md-3 col-lg-4 col-sm-3 sticky-top">
          <Sidebar />
        </div>
        <div className="col col-md-6 col-lg-4 col-sm-6">
          <TweetBox />
        </div>
        <div className="col col-md-3 col-lg-4 col-sm-3">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default App;

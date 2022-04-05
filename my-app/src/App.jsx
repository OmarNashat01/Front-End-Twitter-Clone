import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Post from "./Components/Post/Post";

function App() {
  return (
    <div className=" container-fluid">
      <div className=" row">
        <div className="main-screen col col-md-3 col-lg-4 col-sm-3 sticky-top">
          <Sidebar />
        </div>
        <div className="col col-md-6 col-lg-4 col-sm-6"><Post  
            key={"dani"}
            displayName={"daniel"}
            username={"danielhrg99"}
            verified={"1"}
            text={"This is my first post Hi everybody"}
            avatar={"https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"}
            image={"https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"}
            isLiked = {"false"}
            isRetweet = {"false"}
            likes = {22}
            retweets = {20}>
              </Post></div>
        <div className="col col-md-3 col-lg-4 col-sm-3">Column</div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../Sidebar/Sidebar";

function UserPage() {
  return (
    <div>
      <div className=" container-fluid">
        <div className=" row">
          <div className="main-screen col col-md-3 col-lg-4 col-sm-2 col-xs-1 sticky-top">
            <Sidebar />
          </div>

          <div className="col col-md-6 col-lg-5 col-sm-9   col-xs-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;

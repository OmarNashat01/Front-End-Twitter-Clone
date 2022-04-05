import { fireEvent, render, screen } from "@testing-library/react";
import Sidebar from "../Sidebar";
import "@testing-library/jest-dom";
import { Route, Router, Routes } from "react-router";

it("home button redirects to home", () => {
  render(
    <div>
      <Router>
        <div className=" container-fluid">
          <div className=" row">
            <div className="main-screen col col-md-3 col-lg-4 col-sm-2 col-xs-1 sticky-top">
              <Sidebar />
            </div>
            <div className="col col-md-6 col-lg-5 col-sm-9   col-xs-8">
              <Routes>
                <Route path="/home" element={<h1>home page test</h1>}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );

  const buttonElement = screen.getByRole("button", {
    name: /Tweet/i,
  });
  fireEvent.click(buttonElement);
  const headingElement = screen.getByText(/Tweet/i);
  expect(headingElement).toBeInTheDocument();
});

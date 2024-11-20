import React from "react";
import ReactDOM from "react-dom";
import CountDown from "./Countdown";

import "./ComingSoon.css";

export default function ComingSoonView() {
  return (
    <div className="comingSoon">
      <div className="container">
        <h1>
            Coming Soon
          <br />
            Sorry For Your Inconvenience
        </h1>
        <CountDown />
      </div>
    </div>
  );
}
import React from "react";
import App from "../App.css";
import bg from "../imgs/bg.svg";
import photo2 from "../imgs/photo2.jpg";

function Home() {
  return (
    <div className="">
      <div
        className="Home"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="col2">
          <h1 className="txt3">
            Instant collaborations <br />
            for remote teams
          </h1>
          <p className="txt2">
            All in one for your remote team chats,
            <br /> collaboration and track projectss
          </p>
          <div className="main">
            <input placeholder="Email" type={"email"} className="inputt" />
            <button className="bttn">Get early access</button>
          </div>
        </div>
      </div>
      <div className="Home-2"></div>
      <div className="photo2">
        {" "}
        <img src={photo2} alt="" />
      </div>
    </div>
  );
}

export default Home;
